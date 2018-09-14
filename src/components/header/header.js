import React, { Component } from 'react';

import './style.css';
import Trip from "../imgs/12trip.png"
class Header extends Component {
	render() {
		return (
			<div className="header">
		<div className="header-content">
			<div className="header-left ">
				<div>
					<a href="#">
						<img src={require('../imgs/12trip.png')} alt="12trip" className="icon-header" />
					</a>
				</div>
			</div>
			<div className="header-right">
				<div className="search-btn">
					<span> <i className="fa fa-search"></i></span>
					<span>Search...</span>
				</div>
			</div>
		</div>
	</div>
		);
	}
}

export default Header;