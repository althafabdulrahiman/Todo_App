import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
            <header>
                <Link to="/">home</Link>
                <Link to="/about">About</Link>
            </header>
    );
};

export default Header;