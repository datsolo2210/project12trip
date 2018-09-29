import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '../../components/profile';
import { getMyReviews, getPendingReviews } from '../../actions/ReviewAction';
import ReviewItem from '../../components/reviewItem';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabOneActive: true,
            isTabTwoActive: false,
            reviews: []
        }
    }
    componentDidMount() {
        this.props.getMyReviews().then(data => {
            this.setState({reviews: data});
        });
        this.props.getPendingReviews();
    }

    changeState(e) {
        if (e.target.name == 'your-review') {
            this.setState({
                isTabOneActive: true,
                isTabTwoActive: false,
                reviews: this.props.myReviews
            })
        } else if (e.target.name == 'pending-review') {
            this.setState({
                isTabOneActive: false,
                isTabTwoActive: true,
                reviews: this.props.pendingReviews
            })
        }
    }

    render() {
        const { account } = this.props;
        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            {
                                account ? <Profile account={account}></Profile> : "Loading account data..."
                            }
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.isTabOneActive ? 'active' : ''}`} name="your-review" href="#" onClick={(e) => this.changeState(e)}>
                                        <b>Your Review</b>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${this.state.isTabTwoActive ? 'active' : ''}`} name="pending-review" href="#" onClick={(e) => this.changeState(e)}>
                                        <b>Pending Review</b>
                                    </a>
                                </li>
                            </ul>
                            <div className="review-list">
                                {
                                    this.state.reviews.map((review, index) => {
                                        return (
                                            <ReviewItem review={review} key={index}></ReviewItem>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        account: state.auth.account,
        myReviews: state.review.myReviews,
        pendingReviews: state.review.pendingReviews
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMyReviews: () => dispatch(getMyReviews()),
        getPendingReviews: () => dispatch(getPendingReviews())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));