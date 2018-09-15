import React, { Component } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class Header extends Component {
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
				</div>
			</div>
		);
	}
}

export default Header;