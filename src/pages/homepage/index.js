import React, { Component } from 'react';
import {connect} from 'react-redux';
import Profile from '../../components/profile';
import {getMyReviews} from '../../actions/ReviewAction';
import ReviewItem from '../../components/reviewItem';

class Homepage extends Component {
    componentDidMount() {
        this.props.getMyReviews();
    }

    render() {
        const {account, reviews} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        {
                            account ? <Profile account={account}></Profile> : "Loading account data..." 
                        }
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                        {
                            reviews ? 
                            reviews.map((review, index) => {
                                return (
                                    <ReviewItem review={review} key={index}></ReviewItem>
                                )
                            }) : "Loading reviews..."
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        reviews: state.review.myReviews
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMyReviews: () => dispatch(getMyReviews())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);