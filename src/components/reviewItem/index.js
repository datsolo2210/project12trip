import React, { Component } from 'react';
import ReplyReview from '../replyReview';
import {actGetHotelRequest} from '../../actions/HotelActions';
import { connect } from 'react-redux';

class ReviewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLiked: props.review.is_liked,
            // isDisliked: props.review.is_disliked,
            likeNumber: props.review.likeNumber,
            dislikeNumber: props.review.dislikeNumber
        }
    }

    componentDidMount() {
        const { review } = this.props;
        this.props.getHotel(review.property).then(response => {
            this.setState({hotel_name: response.name})
            console.log(this.state.hotel_name)
        });
    }

    // like(id) {
    //     // undislike before like
    //     if (this.state.isDisliked) {
    //         this.props.undislikeReview(id);
    //         this.setState({ isDisliked: false, dislikeNumber: this.state.dislikeNumber - 1 });
    //     }

    //     if (this.state.isLiked) {
    //         this.props.unlikeReview(id);
    //         this.setState({ isLiked: false, likeNumber: this.state.likeNumber - 1 });
    //     } else {
    //         this.props.likeReview(id);
    //         this.setState({ isLiked: true, likeNumber: this.state.likeNumber + 1 });
    //     }
    // }

    // dislike(id) {
    //     // unlike before dislike
    //     if (this.state.isLiked) {
    //         this.props.unlikeReview(id);
    //         this.setState({ isLiked: false, likeNumber: this.state.likeNumber - 1 });
    //     }

    //     if (this.state.isDisliked) {
    //         this.props.undislikeReview(id);
    //         this.setState({ isDisliked: false, dislikeNumber: this.state.dislikeNumber - 1 });
    //     } else {
    //         this.props.dislikeReview(id);
    //         this.setState({ isDisliked: true, dislikeNumber: this.state.dislikeNumber + 1 });
    //     }
    // }

    render() {
        const { review } = this.props;
        const { likeNumber, dislikeNumber } = this.state;

        var avg_rate = 0;  
        if(review) review.items.map(item => {
            return avg_rate += item.level;
        })

        return (
            <div className='review-item'>
                <div className="row">
                    <div className="col-8">
                        <small>
                            <i>Review for hotel {this.state.hotel_name} - Created at {new Date(review.created).toLocaleString()}</i>
                        </small>
                        {
                            review.is_approved ? (<span>    <i className="fas fa-check-circle"></i></span>) : null
                        }
                        <h6>Writen by {review.account.name}</h6>
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
                        <br />
                        <div className="alert alert-success">
                            {review.text_like}
                        </div>
                        <div className="alert alert-danger">
                            {review.text_dislike}
                        </div>
                        <div>
                            {/* <button className={`btn btn-vote ${isLiked ? 'active' : ''}`} >
                                {likeNumber}<i className="fas fa-thumbs-up"></i>
                            </button>
                            <button className={`btn btn-vote ${isDisliked ? 'active' : ''}`} >
                                {dislikeNumber}<i className="fas fa-thumbs-down"></i>
                            </button> */}
                            <hr />
                            <span>{likeNumber} <i className="fas fa-thumbs-up icon-like"></i> and {dislikeNumber} <i className="fas fa-thumbs-down icon-like"></i> for this review</span>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"><h4>Avg Rate: {((avg_rate * 10) / 24).toFixed(2)}/10</h4></div>
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
                <div>
                    <hr />
                </div>
                <React.Fragment>
                    {review.votes.map((vote) => {
                        return (<ReplyReview vote={vote} key={vote._id}></ReplyReview>)
                    })
                    }
                </React.Fragment>
                {/* <div className='row'>
                    <div className='col-12'>
                        <input
                            className="input-reply-comment form-control"
                            type="text"
                            name="title_review"
                            placeholder="Write a reply review..."
                        />
                    </div>
                </div> */}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHotel: (id) =>  dispatch(actGetHotelRequest(id))
        
    }
}



export default connect(null, mapDispatchToProps)(ReviewItem);