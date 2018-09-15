import React, { Component } from 'react';
import Photo from './photo';
import LocationAdress from './locationAddress';
import FormSubmit from './formSubmit';

import './quickReview.css';

class QuickReview extends Component {
    render() {
        let {hotel} = this.props;
        return (
            <div className="quick_review">
                <Photo
                    photo ={hotel.photo}
                />
                <div className="location_content">
                    <LocationAdress
                        address= {hotel.address}
                    >{hotel.name}</LocationAdress>
                    <FormSubmit 
                        id={hotel.id}
                    />
                </div>
            </div>
        );
    }
}

export default QuickReview;
