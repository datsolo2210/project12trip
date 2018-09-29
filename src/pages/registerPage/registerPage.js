import React, { Component } from 'react';
import '../../assets/css/registration/login.css';
import '../../assets/css/registration/theme.css';
import { actRegisterRequest } from '../../actions/AuthActions';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newAccount: {
				name: "",
				email: "",
				phone: "",
				password: ""
			}
		};
	}

	onChange = (e) =>{
		this.setState({
			newAccount: {
				...this.state.newAccount,
				[e.target.name] : e.target.value
			}
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.register(this.state.newAccount);
	}

	render() {

		if (this.props.redirectToReferrer === true) {
			return <Redirect to='/' />
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
									<Link to="/login">Login</Link><Link to="/register" className="active">Register</Link>
								</div>
								<form onSubmit={this.onSubmit}>
									<input className="form-control" type="text" name="name" placeholder="Full Name" onChange={this.onChange} required />
									<input className="form-control" type="email" name="email" placeholder="E-mail Address" onChange={this.onChange} required />
									<input className="form-control" type="phone" name="phone" placeholder="Phone number" onChange={this.onChange} required />
									<input className="form-control" type="password" name="password" placeholder="Password" onChange={this.onChange} required />
									<div className="form-button">
										<button id="submit" type="submit" className="ibtn">Register</button>
									</div>
								</form>
								<div className="other-links">
									<span>Or register with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		redirectToReferrer: state.auth.redirectToReferrer, 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		register : (newAccount) => dispatch( actRegisterRequest(newAccount))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);