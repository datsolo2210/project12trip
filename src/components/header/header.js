import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeCookie, getCookie } from '../../helper';

class Header extends Component {

	logout() {
		removeCookie('session_id');
		removeCookie('token');
		window.location.href = '/login';
	}

	render() {
		return (
			<div className="header">
				<div className="header-content">
					<div className="header-left ">
						<div>
							<Link to='/'>
								<img src={require('../../logo.png')} alt="12trip" className="icon-header" />
							</Link>
						</div>
					</div>
					<div className="header-right">
						{
							getCookie('session_id') ?
								(
									<div>
										<Link to='/search'>
											<i className="fas fa-search fa-2x"></i>
										</Link>
										<span ><Link style={{color: 'white'}} to={'/'}> {this.props.account.name}</Link><a id="log-out" onClick={() => this.logout()}>(Log out)</a></span>
									</div>
								)
								: null
						}
					</div>

				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		account: state.auth.account
	}
}

export default connect(mapStateToProps, null)(Header);