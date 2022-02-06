import React from "react";
import { NavLink } from "react-router-dom";
import '..//App.css';

function Navigation() {
    return (
        <div>
            <br/>
            <div className="ChildDiv">
                <NavLink className="CompanyName" to="/">
                    AIGUI
                </NavLink>
            </div>
            <div className="ChildDiv">
                <li>
                    <NavLink to="/tool">
                        <a>Tool</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        <a>About</a>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <a>Contact</a>
                    </NavLink>
                </li>
            </div>
        </div>
    );
}

export default Navigation;