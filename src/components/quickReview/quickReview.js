import React, { Component } from 'react';
import Photo from './photo';
import LocationAdress from './locationAddress';
import FormSubmit from './formSubmit';

class QuickReview extends Component {
    render() {
        var {hotel} = this.props;

        return (
            <div className="quick_review">
                {
                    hotel.photo ? <Photo photo ={hotel.photo.url_original} /> : <Photo photo="http://kalaharilifestyle.com/wp-content/uploads/2014/04/placeholder4.png"/>
                }
                <div className="location_content">
                    <LocationAdress address= {hotel.address} id={hotel.hotel_id} >
                        {hotel.hotel_name}
                    </LocationAdress>
                    <FormSubmit id={hotel.hotel_id} />
                </div>
            </div>
        );
    }
}

export default QuickReview;
