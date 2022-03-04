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
            <div class="mynavbackground">
            </div>
            {/* <!-- ====== Header Start ====== --> */}
            <header class="ud-header">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                            <button class="navbar-toggler">
                                <span class="toggler-icon"> </span>
                                <span class="toggler-icon"> </span>
                                <span class="toggler-icon"> </span>
                            </button>

                            <div class="navbar-collapse">
                                <ul id="nav" class="navbar-nav mx-auto">
                                    <li class="nav-item">
                                        <a class="ud-menu-scroll" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="ud-menu-scroll" href="/Pricing">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="ud-menu-scroll" href="/About">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="ud-menu-scroll" href="/Contact">Contact</a>
                                    </li>

                                    {isAuth === true ? (
                                        <li class="nav-item nav-item-has-children">
                                        <a href="/Upload"> Tool </a>
                                            <ul class="ud-submenu">
                                                <li class="ud-submenu-item">
                                                    <a href="/Upload" class="ud-submenu-link">
                                                    Upload
                                                    </a>
                                                </li>
                                                <li class="ud-submenu-item">
                                                    <a href="/Organize" class="ud-submenu-link">
                                                    Organize
                                                    </a>
                                                </li>
                                                <li class="ud-submenu-item">
                                                    <a href="/Annotate" class="ud-submenu-link">
                                                    Annotate
                                                    </a>
                                                </li>
                                                <li class="ud-submenu-item">
                                                    <a href="/Train" class="ud-submenu-link">
                                                    Train
                                                    </a>
                                                </li>
                                                <li class="ud-submenu-item">
                                                    <a href="/Deploy" class="ud-submenu-link">
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

                            <div class="navbar-btn d-none d-sm-inline-block">
                                {isAuth === true ? (
                                    <div>
                                        <a href="/Logout" class="ud-main-btn ud-login-btn">
                                        Logout
                                        </a>
                                        <a>{localStorage.getItem('user')}</a>
                                    </div>
                                ) : (
                                    <div>
                                        <a href="/Signin" class="ud-main-btn ud-login-btn">
                                        Login
                                        </a>
                                        <a class="ud-main-btn ud-white-btn" href="/Signup">
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