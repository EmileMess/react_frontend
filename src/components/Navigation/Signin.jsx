import React, { useState, useEffect } from 'react';
import logo from "..//..//assets/images/logo/logo-2.svg";


function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            window.location.replace('/Upload');
        } else {
            setLoading(false);
        }
        }, []);

    const onSubmit = e => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        fetch('https://aigui-backend.azurewebsites.net/users/auth/login/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            if (data.key) {
                localStorage.clear();
                localStorage.setItem('token', data.key);
                localStorage.setItem('user', email);
                window.location.replace('/Upload');
            } else {
                setEmail('');
                setPassword('');
                localStorage.clear();
                setErrors(true);
            }
            });
    };

    return (
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section className="ud-page-banner">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="ud-banner-content">
                    <h1>Login Page</h1>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}

            {loading === false && (
                <div>
                    {/* <!-- ====== Login Start ====== --> */}
                    <section className="ud-login">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="ud-login-wrapper">
                                    <div className="ud-login-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <form onSubmit={onSubmit} className="ud-login-form">
                                        <div className="ud-form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            required
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                        </div>
                                        <div className="ud-form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            required
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        </div>
                                        <div className="ud-form-group">
                                        <button type="submit" className="ud-main-btn w-100">Login</button>
                                        </div>
                                    </form>

                                    {errors === true && <div className='myWarning'> <a>Username or Password incorrect</a> <br/> <br/> <br/> </div>}
                                    
                                    {/* <div className="ud-socials-connect">
                                        <p>Connect With</p>
                                        <ul>
                                        <li>
                                            <a href="" className="facebook">
                                            <i className="lni lni-facebook-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="twitter">
                                            <i className="lni lni-twitter-filled"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="google">
                                            <i className="lni lni-google"></i>
                                            </a>
                                        </li>
                                        </ul>
                                    </div> */}

                                    <a className="forget-pass" href="">
                                        Forgot Password?
                                    </a>
                                    <p className="signup-option">
                                        Not a member yet? <a href="/Signup"> Sign Up </a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
            {/* <!-- ====== Login End ====== --> */}
        </div>
    );
}

export default Signin;