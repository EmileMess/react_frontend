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
                        Tool
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        Contact
                    </NavLink>
                </li>
            </div>
        </div>
    );
}

export default Navigation;