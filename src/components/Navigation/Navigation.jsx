import React, { useState, useEffect } from 'react';
import Logo from "..//..//assets/images/logo/logo.svg";

function Navigation() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
        }
    }, []);

    return (
        <div>
            <div className="mynavbackground">
            </div>
            {/* <!-- ====== Header Start ====== --> */}
            <header className="ud-header">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <button className="navbar-toggler">
                                <span className="toggler-icon"> </span>
                                <span className="toggler-icon"> </span>
                                <span className="toggler-icon"> </span>
                            </button>

                            <div className="navbar-collapse">
                                <ul id="nav" className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="/Pricing">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="/About">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="ud-menu-scroll" href="/Contact">Contact</a>
                                    </li>

                                    {isAuth === true ? (
                                        <li className="nav-item nav-item-has-children">
                                        <a href="/Upload"> Tool </a>
                                            <ul className="ud-submenu">
                                                <li className="ud-submenu-item">
                                                    <a href="/Upload" className="ud-submenu-link">
                                                    Upload
                                                    </a>
                                                </li>
                                                <li className="ud-submenu-item">
                                                    <a href="/Organize" className="ud-submenu-link">
                                                    Organize
                                                    </a>
                                                </li>
                                                <li className="ud-submenu-item">
                                                    <a href="/Annotate" className="ud-submenu-link">
                                                    Annotate
                                                    </a>
                                                </li>
                                                <li className="ud-submenu-item">
                                                    <a href="/Train" className="ud-submenu-link">
                                                    Train
                                                    </a>
                                                </li>
                                                <li className="ud-submenu-item">
                                                    <a href="/Deploy" className="ud-submenu-link">
                                                    Deploy
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>             
                                    ) : (
                                    null
                                    )}        
                                </ul>
                            </div>

                            <div className="navbar-btn d-none d-sm-inline-block">
                                {isAuth === true ? (
                                    <div>
                                        <a href="/Logout" className="ud-main-btn ud-login-btn">
                                        Logout
                                        </a>
                                        <a>{localStorage.getItem('user')}</a>
                                    </div>
                                ) : (
                                    <div>
                                        <a href="/Signin" className="ud-main-btn ud-login-btn">
                                        Login
                                        </a>
                                        <a className="ud-main-btn ud-white-btn" href="/Signup">
                                        Sign Up
                                        </a>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                    </div>
                </div>
            </header>
            {/* <!-- ====== Header End ====== --> */}
        </div>
    );
}

export default Navigation;