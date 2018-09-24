import React, { Component } from 'react';
import '../../assets/css/registration/login.css';
import '../../assets/css/registration/theme.css';
import {Link} from 'react-router-dom';
import { actLoginRequest } from '../../actions/HotelActions';
import {connect} from 'react-redux';

class LoginPage extends Component {

	constructor(props) {
		super(props);
		this.state={
			username: "",
			password: ""
		};
	}

	onChange = (e) => {
		let target = e.target;
		let name = target.name;
		this.setState({
			[name] : target.value
		});
	};

	login = (e) => {
		e.preventDefault();
		let login = this.state;
		// if(login) {
		// 	alert('nhap email va mat khau');
		// }
		// else {
			this.props.userLogin(login);
		// }
	}




	render() {
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
								<input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChange}  required />
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

export default connect(null, mapDispatchToProps)(LoginPage);