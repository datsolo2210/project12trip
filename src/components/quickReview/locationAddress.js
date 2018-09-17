import React, { Component } from 'react';

class LocationAdress extends Component {
    render() {

        return (
            <div>
                <div >
                    <a href="" target="_blank" className="location_name">{this.props.children}</a>
                </div>
                <div className="location_address">
                    {this.props.address}
			</div>
            </div>
        );
    }
}

export default LocationAdress;