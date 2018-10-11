import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LocationAdress extends Component {
    render() {

        return (
            <div>
                <div >
                    <Link to={'/review-detail/'+this.props.id} className="location_name">{this.props.children}</Link>
                </div>
                <div className="location_address">
                    {this.props.address}
			</div>
            </div>
        );
    }
}

export default LocationAdress;