import React, { Component } from 'react';
import '../../assets/css/registration/login.css';
import '../../assets/css/registration/theme.css';
import { Link } from 'react-router-dom';
import { actLoginRequest } from '../../actions/AuthActions';
import { connect } from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import Auth from '../../Auth';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: false,
			username: "",
			password: ""
		};
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	login = (e) => {
		e.preventDefault();
		let login = this.state;
		Auth.authenticate(() => {
			this.props.userLogin(login);
			this.setState({redirectToReferrer: true});
		})
		
	}

	render() {	
		const { from } = this.props.location.state || { from: { pathname: "/" } };
		const { redirectToReferrer } = this.state;

		console.log(this.props);

		if (redirectToReferrer === true) {
			return <Redirect to={from} />
		}

		return (
			<div className="form-body">
				<div className="row">
					<div className="img-holder">
						<div className="bg" />
						<div className="info-holder">
							<img src="https://png2.kisspng.com/20180514/qaw/kisspng-package-tour-travel-clip-art-5afa00b048d561.2859288615263336162983.png" alt="img" />
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
								<form onSubmit={this.login}>
									<input className="form-control" type="text" name="username" placeholder="E-mail Address" onChange={this.onChange} required />
									<input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChange} required />
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

const mapDispatchToProps = (dispatch, props) => {
	return {
		userLogin: (login) => {
			dispatch(actLoginRequest(login));
		}
	}
}

export default withRouter(connect(null, mapDispatchToProps)(LoginPage));