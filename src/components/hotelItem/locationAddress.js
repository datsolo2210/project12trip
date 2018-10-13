import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LocationAdress extends Component {
    render() {

        return (
            <div>
                <div >
                    <a href={`hotel-detail/${this.props.id}`} target='blank' className="location_name">{this.props.children}</a>
                </div>
                <div className="location_address">
                    {this.props.address}
			</div>
            </div>
        );
    }
}

export default LocationAdress;