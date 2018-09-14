import React, { Component } from 'react';
import Photo from './photo';
import LocationAdress from './locationAddress';
import FormSubmit from './formSubmit';

import './quickReview.css';

class QuickReview extends Component {
    render() {
        return (
            <div className="quick_review">
                <Photo/>
                <div className="location_content">
                    <LocationAdress/>
                    <FormSubmit/>
                </div>
            </div>
        );
    }
}

export default QuickReview;
