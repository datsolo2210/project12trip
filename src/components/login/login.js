import React, { Component } from 'react';
import './login.css';
import './theme.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="form-body">
                {/* <div className="website-logo">
                    <a href="index.html">
                        <div className="logo">
                            <img className="logo-size" src="" alt="img" />
                        </div>
                    </a>
                </div> */}
                <div className="row">
                    <div className="img-holder">
                        <div className="bg" />
                        <div className="info-holder">
                            <img src="" alt="img" />
                        </div>
                    </div>
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Get more things done with Loggin platform.</h3>
                                <p>Access to the most powerfull tool in the entire design and web industry.</p>
                                <div className="page-links">
                                    <Link to="/login" className="active">Login</Link><Link to="register">Register</Link>
                                </div>
                                <form>
                                    <input className="form-control" type="text" name="username" placeholder="E-mail Address" required />
                                    <input className="form-control" type="password" name="password" placeholder="Password" required />
                                    <div className="form-button">
                                        <button id="submit" type="submit" className="ibtn">Login</button> <a href="forget4.html">Forget password?</a>
                                    </div>
                                </form>
                                <div className="other-links">
                                    <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;