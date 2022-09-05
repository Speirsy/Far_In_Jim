import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>    
                <Link to="/pricing">Pricing</Link>
            </li>
            <li>    
                <Link to="/farinjim">FarInJim</Link>
            </li>
            <li>    
                <Link to="/$5000songs">$5000Songs</Link>
            </li>
            <li>    
                <Link to="/videos">Videos</Link>
            </li>
            <li>    
                <Link to="/choices">Choices</Link>
            </li>
            <li>    
                <Link to="/StyleSheet">StyleSheet</Link>
            </li>
            <li>    
                <button onClick={goBack}>Back</button>
            </li>
        </ul>
    );
};

export default NavBar;
