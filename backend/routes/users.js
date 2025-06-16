const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { User } = require('../models/user');

// Get all users (only nameOrEmail and createdAt)
router.get('/', async (req, res) => {
  try {
    const userList = await User.find().select('nameOrEmail createdAt');
    if (!userList || userList.length === 0) {
      return res.status(200).json({ success: true, users: [], message: 'No users found' });
    }
    res.status(200).json({ success: true, users: userList });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID format' });
    }
    const user = await User.findById(req.params.id).select('nameOrEmail createdAt');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Register new user
router.post('/', async (req, res) => {
  try {
    const { nameOrEmail, passwordHash, cpasswordHash } = req.body;

    if (!nameOrEmail || !passwordHash) {
      return res.status(400).json({ success: false, message: 'Username/email and password are required' });
    }
    if (passwordHash.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long' });
    }
    if (cpasswordHash && passwordHash !== cpasswordHash) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    if (nameOrEmail.includes('@') && !/\S+@\S+\.\S+/.test(nameOrEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address' });
    }

    const existingUser = await User.findOne({ nameOrEmail });
    if (existingUser) {
      return res.status(409).json({ success: false, message: 'User with this username/email already exists' });
    }

    const hashedPassword = bcrypt.hashSync(passwordHash, 10);

    let user = new User({
      nameOrEmail: nameOrEmail.trim(),
      passwordHash: hashedPassword,
    });

    user = await user.save();
    if (!user) {
      return res.status(400).json({ success: false, message: 'Failed to create user' });
    }

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: { id: user._id, nameOrEmail: user.nameOrEmail, createdAt: user.createdAt },
    });
  } catch (error) {
    console.error('Registration error:', error);

    if (error.code === 11000) {
      return res.status(409).json({ success: false, message: 'User with this username/email already exists' });
    }

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }

    res.status(500).json({ success: false, message: 'An error occurred while creating the user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { nameOrEmail, passwordHash } = req.body;
    if (!nameOrEmail || !passwordHash) {
      return res.status(400).json({ success: false, message: 'Username/email and password are required' });
    }

    const user = await User.findOne({ nameOrEmail: nameOrEmail.trim() });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isPasswordValid = bcrypt.compareSync(passwordHash, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    res.status(200).json({
      success: true,
      message: 'Login successful',
      user: { id: user._id, nameOrEmail: user.nameOrEmail },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error occurred during login' });
  }
});

// Update user by ID
router.put('/:id', async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID format' });
    }

    const { nameOrEmail, passwordHash } = req.body;
    const userExists = await User.findById(req.params.id);
    if (!userExists) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const updateData = {};
    if (nameOrEmail) updateData.nameOrEmail = nameOrEmail.trim();
    if (passwordHash) {
      if (passwordHash.length < 6) {
        return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long' });
      }
      updateData.passwordHash = bcrypt.hashSync(passwordHash, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true }).select('nameOrEmail createdAt updatedAt');
    if (!updatedUser) {
      return res.status(400).json({ success: false, message: 'Failed to update user' });
    }

    res.status(200).json({ success: true, message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Update user error:', error);
    res.status(500).json({ success: false, message: 'Server error occurred during update' });
  }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID format' });
    }

    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ success: false, message: 'Server error occurred during deletion' });
  }
});

// Get user count
router.get('/get/count', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ success: true, userCount, message: `Found ${userCount} users` });
  } catch (error) {
    console.error('Get user count error:', error);
    res.status(500).json({ success: false, message: 'Server error occurred while counting users' });
  }
});

module.exports = router;
