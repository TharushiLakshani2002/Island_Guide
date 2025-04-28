import React,{ useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        
        alert("Logout successful!");
        navigate("/login"); // Redirect to login page after logout
    }, [navigate]);

    return null; // No UI to render for logout
}
export default Logout;