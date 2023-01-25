import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBarFij = () => {
    const navigate = useNavigate();
    const goBackFij = () => navigate(-1);

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>    
                <Link to="/farinjim">FarInJim</Link>
            </li>
            
        
            <li>    
                <button onClick={goBackFij}>Back</button>
            </li>
        </ul>
    );
};

export default NavBarFij;