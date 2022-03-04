import React, { useState, useEffect } from 'react';
import logo from "..//..//assets/images/logo/logo-2.svg";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
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
      password1: password1,
      password2: password2
    };

    fetch('https://aigui-backend.azurewebsites.net/users/auth/register/', {
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
          window.location.replace('/Upload');
        } else {
          setEmail('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
        <div>
            {/* <!-- ====== Banner Start ====== --> */}
            <section class="ud-page-banner">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-banner-content">
                        <h1>Sign Up</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Banner End ====== --> */}
        </div>
        <section class="ud-login">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ud-login-wrapper">
                            <div class="ud-login-logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <form onSubmit={onSubmit} class="ud-login-form">
                                <div class="ud-form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                                </div>
                                <div class="ud-form-group">
                                <input
                                    type="password"
                                    name="password1"
                                    placeholder="Password"
                                    value={password1}
                                    required
                                    onChange={e => setPassword1(e.target.value)}
                                />
                                </div>
                                <div class="ud-form-group">
                                <input
                                    type="password"
                                    name="password2"
                                    placeholder="Confirm Password"
                                    value={password2}
                                    required
                                    onChange={e => setPassword2(e.target.value)}
                                />
                                </div>
                                <div class="ud-form-group">
                                <button type="submit" class="ud-main-btn w-100">Sign Up</button>
                                </div>
                            </form>

                            {errors === true && <div className='myWarning'> <a>Cannot sign up with provided credentials</a> <br/> <br/> <br/></div>}

                            {/* <div class="ud-socials-connect">
                                <p>Connect With</p>
                                <ul>
                                <li>
                                    <a href="javascript:void(0)" class="facebook">
                                    <i class="lni lni-facebook-filled"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="twitter">
                                    <i class="lni lni-twitter-filled"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" class="google">
                                    <i class="lni lni-google"></i>
                                    </a>
                                </li>
                                </ul>
                            </div> */}

                            <p class="signup-option">
                                Already have an account? <a href="/Signin"> Login </a>
                            </p>

                            {/* <div>
                                {loading === false && <h1>Signup</h1>}
                                {errors === true && <h2>Cannot signup with provided credentials</h2>}
                                <form onSubmit={onSubmit}>
                                    <label htmlFor='email'>Email address:</label> <br />
                                    <input
                                    name='email'
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    />{' '}
                                    <br />
                                    <label htmlFor='password1'>Password:</label> <br />
                                    <input
                                    name='password1'
                                    type='password'
                                    value={password1}
                                    onChange={e => setPassword1(e.target.value)}
                                    required
                                    />{' '}
                                    <br />
                                    <label htmlFor='password2'>Confirm password:</label> <br />
                                    <input
                                    name='password2'
                                    type='password'
                                    value={password2}
                                    onChange={e => setPassword2(e.target.value)}
                                    required
                                    />{' '}
                                    <br />
                                    <input type='submit' value='Signup' />
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Signup;