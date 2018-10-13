import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HeadReviewDetail from '../../components/reviewDetail/HeadReviewDetail';
import { actGetDetailHotel } from '../../actions/HotelActions';
import { connect } from 'react-redux';
import ReviewItemPending from '../../components/reviewItemPending';
import {Link} from 'react-router-dom';

class DetailHotel extends Component {


    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(id);
        this.props.getHotel(id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.hotel) {
            this.setState({
                hotel: nextProps.hotel.data
            });
        }
    }

    render() {
        var id = this.props.match.params.id;
        return (
            <div className="review-detail">
                <div className="body-review">
                    <HeadReviewDetail hotel={this.props.hotel}></HeadReviewDetail>
                    <hr style={{marginTop: '50px'}}></hr>
                        <div>
                            <div className="count-review">Review ({this.props.hotel.reviews.length})</div>
                            <div className='write-review'>
                                <Link to={`/review-detail/${id}`} className='btn btn-search'>Write a review</Link>
                            </div>
                        </div>
                        <hr style={{clear: "both"}}></hr>
                    <div style={{clear: "both"}}>
                    {
                        this.props.hotel.reviews.map((review) => {
                            return <ReviewItemPending
                                key={review._id}
                                review={review}
                            ></ReviewItemPending>
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        hotel: state.hotel.hotelReview,
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getHotel: (id) => {
            dispatch(actGetDetailHotel(id));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailHotel));