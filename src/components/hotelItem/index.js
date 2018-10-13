import React, { Component } from 'react';
import Photo from './photo';
import LocationAdress from './locationAddress'; 
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';

class HotelItem extends Component {
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
                    <div>
                        <StarRatings
                            rating={hotel.stars}
                            starRatedColor="yellow"
                            starHoverColor="yellow"
                            starDimension="25px"
                            starSpacing="2px"
                            numberOfStars={5}
                            name='stars'
                        />
                    </div>
                    <Link to={`/hotel-detail/${hotel.hotel_id}`} className='btn btn-search see-review' target='blank' >See Review</Link>
                </div>
            </div>
        );
    }
}

export default HotelItem;
