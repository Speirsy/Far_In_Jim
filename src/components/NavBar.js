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
                <Link to="/farinjim">FarInJim</Link>
            </li>
            <li>    
                <Link to="/farinjim/videos">FIJ Videos</Link>
            </li>
            <li>    
                <Link to="/farinjim/audio">FIJ Audio</Link>
            </li>
            <li>    
                <Link to="/johnpaulspeirs">BassJPS</Link>
            </li>
            <li>    
                <Link to="/johnpaulspeirs/JPSvids">Bass JPS Videos</Link>
            </li>
            <li>    
                <Link to="/johnpaulspeirs/JPSBlog">Bass JPS Blog</Link>
            </li>
            <li>    
                <Link to="/johnpaulspeirs/JPSDiscog">JPS Discography</Link>
            </li>
            <li>    
                <Link to="/$5000songs">$5000Songs</Link>
            </li>
            {/* <li>    
                <Link to="/StyleSheet">StyleSheet</Link>
            </li> */}
            <li>    
                <button onClick={goBack}>Back</button>
            </li>
        </ul>
    );
};

export default NavBar;
