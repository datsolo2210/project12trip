import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewItem from '../../components/reviewItem';


class DetailHotel extends Component {
    render() {

        return (
            <div className="review-detail">
                <div className="body-review">
                    <HeadReviewDetail></HeadReviewDetail>
                </div>
                <div className='body-review'>
                    <div className='list-review'>
                        <hr></hr>
                        <div className="count-review">Review (1)</div>
                        <div className='write-review'>
                            <button className='btn btn-search'>Write a review</button>
                        </div>
                        <hr></hr>
                    </div>
                    <ReviewItem>

                    </ReviewItem>
                </div>
            </div>
        );
    }
}

export default DetailHotel;