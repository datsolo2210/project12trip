import React, { Component } from 'react';
import {connect} from 'react-redux';
import {likeReview, dislikeReview, unlikeReview, undislikeReview} from '../../actions/ReviewAction';

class ReviewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: props.review.is_liked,
            isDisliked: props.review.is_disliked,
            likeNumber: props.review.like_list.length,
            dislikeNumber: props.review.dislike_list.length
        }
    }

    like(id) {
        if(this.state.isLiked) {
            this.props.unlikeReview(id);
            this.setState({isLiked: false, likeNumber: this.state.likeNumber - 1});
        } else {
            this.props.likeReview(id);
            this.setState({isLiked: true, likeNumber: this.state.likeNumber + 1});
        }
    }

    dislike(id) {
        if(this.state.isDisliked) {
            this.props.undislikeReview(id);
            this.setState({isDisliked: false, dislikeNumber: this.state.dislikeNumber - 1});
        } else {
            this.props.dislikeReview(id);
            this.setState({isDisliked: true, dislikeNumber: this.state.dislikeNumber + 1});
        }
    }

    render() {
        const { review } = this.props;
        const {isLiked, isDisliked, likeNumber, dislikeNumber} = this.state;

        var avg_rate = 0;
        review.items.map(item => {
            return avg_rate += item.level;
        })

        return (
            <div className="row review-item">   
                <div className="col-8">
                    <small>
                        <i>Review for hotel {review.property} - Created at {new  Date(review.created).toLocaleString()}</i> 
                    </small>
                    {
                        review.is_approved ? (<i className="fas fa-check-circle"></i>) : null
                    }
                    <h4>{review.title}</h4>
                    <div>
                        <div className="row">
                            <div className="col-4">
                                Expect Level: <div className="tag"><b>{review.expect_level}</b></div>
                            </div>
                            <div className="col-4">
                                Travel type: <div className="tag"><b>{review.travel_type}</b></div>
                            </div>
                            <div className="col-4">
                                Travel with: <div className="tag"><b>{review.travel_with}</b></div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="alert alert-success">
                        {review.text_like}
                    </div>
                    <div className="alert alert-danger">
                        {review.text_dislike}
                    </div>
                    <div>
                        <button className={`btn btn-vote ${isLiked ? 'active' :''}`} onClick={() => this.like(review._id)}>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                        <button className={`btn btn-vote ${isDisliked ? 'active' :''}`} onClick={() => this.dislike(review._id)}>
                            <i className="fas fa-thumbs-down"></i>
                        </button>
                        <br/>
                        <small>{likeNumber} like and {dislikeNumber} dislike for this review</small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title"><h4>Avg Rate: {((avg_rate*10)/24).toFixed(2)}/10</h4></div>
                            <div className="card-text">
                                <ul className="list-group">
                                    {
                                        review.items.map((item, index) => {
                                            return (
                                                <li className="" key={index}>
                                                    {item.title}: {item.level}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likeReview: (id) => dispatch(likeReview(id)),
        dislikeReview: (id) => dispatch(dislikeReview(id)),
        unlikeReview: (id) => dispatch(unlikeReview(id)),
        undislikeReview: (id) =>  dispatch(undislikeReview(id))
    }
}

export default connect(null, mapDispatchToProps)(ReviewItem);