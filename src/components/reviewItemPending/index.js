import React, { Component } from 'react';
import { connect } from 'react-redux';
import { voteAct } from '../../actions/ReviewAction';
import ReplyReview from '../replyReview';
import {actGetHotelRequest} from '../../actions/HotelActions';

class ReviewItemPending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLiked: props.review.is_liked,
            isDisliked: props.review.is_disliked,
            likeNumber: props.review.likeNumber,
            dislikeNumber: props.review.dislikeNumber,
            comment: "",

        }
    }
    
    componentDidMount() {
        const { review } = this.props;
        this.props.getHotel(review.property).then(response => {
            this.setState({hotel_name: response.name})
            
        });
    }

    like() {
        // undislike before like
        if (this.state.isDisliked) {
            this.setState({ isDisliked: false, dislikeNumber: this.state.dislikeNumber - 1 });
        }

        if (this.state.isLiked) {
            this.setState({ isLiked: false, likeNumber: this.state.likeNumber - 1 });
        } else {
            this.setState({ isLiked: true, likeNumber: this.state.likeNumber + 1 });
        }
        document.getElementById("myModal").style.display = "block";
        
    }

    dislike() {
        // unlike before dislike
        if (this.state.isLiked) {
            this.setState({ isLiked: false, likeNumber: this.state.likeNumber - 1 });
        }

        if (this.state.isDisliked) {
            this.setState({ isDisliked: false, dislikeNumber: this.state.dislikeNumber - 1 });
        } else {
            this.setState({ isDisliked: true, dislikeNumber: this.state.dislikeNumber + 1 });
        }
        document.getElementById("myModal").style.display = "block";
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitCmt(id) {
        if (this.state.isLiked) {
            let vote = {
                id: id,
                comment: {
                    value: 1,
                    comment: this.state.comment
                }
            };
            
            this.props.submitComment(vote)
            document.getElementById("myModal").style.display = "none";
        }
        if (this.state.isDisliked) {
            let vote = {
                id: id,
                comment: {
                    value: -1,
                    comment: this.state.comment
                }
            };
            console.log(vote);
            this.props.submitComment(vote);
            document.getElementById("myModal").style.display = "none";
        }
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const { review } = this.props;
        const { isLiked, isDisliked, likeNumber, dislikeNumber } = this.state;

        var avg_rate = 0;
        review.items.map(item => {
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
                            <hr />
                            <button className={`btn-like ${isLiked ? 'btn-like-active' : ''}`} onClick={() => this.like()} >
                                <i className="fas fa-thumbs-up"></i>
                            </button>
                            <button className={`btn-like ${isDisliked ? 'btn-like-active' : ''}`} onClick={() => this.dislike()} >
                                <i className="fas fa-thumbs-down"></i>
                            </button>
                            <span>{likeNumber} <i className="fas fa-thumbs-up icon-like" ></i> and {dislikeNumber} <i className="fas fa-thumbs-down icon-like"></i> for this review</span>
                            <div id="myModal" className="modal-comment">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className='row'>
                                            <div className='col-12'>
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    name="comment"
                                                    placeholder="Tell why you like or dislike this review..."
                                                    onChange={(e) => this.onChange(e)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className='row'>
                                            <div className='col-1'>
                                                <button type="button" className="btn btn-default" onClick={() => this.submitCmt(review._id)}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    {
                        review.votes.map((vote) => {
                            return (<ReplyReview vote={vote} key={vote._id}></ReplyReview>)
                        })
                    }
                </React.Fragment>

            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitComment: (vote) => dispatch(voteAct(vote)),
        getHotel: (id) =>  dispatch(actGetHotelRequest(id))
        
    }
}

// const mapStateToProps = state => {
//     return {
//         hotel: state.hotel.currentHotel
//     };
// }





export default connect(null, mapDispatchToProps)(ReviewItemPending);