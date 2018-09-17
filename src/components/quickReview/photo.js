import React, { Component } from 'react';

class Photo extends Component {
	render() {

		return (
			<div className="location_photo">
				<img src={this.props.photo} className="photo" alt="hotel"></img>
			</div>
		);
	}
}

export default Photo;
