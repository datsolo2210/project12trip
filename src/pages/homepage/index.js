import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '../../components/profile';
import { getMyReviews, getPendingReviews } from '../../actions/ReviewAction';
import ReviewItem from '../../components/reviewItem';
import ReviewItemPending from '../../components/reviewItemPending';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTabOneActive: true,
            isTabTwoActive: false,
        }
    }
    componentDidMount() {
        this.props.getMyReviews();
        this.props.getPendingReviews();

    }


    changeState(e) {
        if (e.target.name == 'your-review') {
            this.setState({
                isTabOneActive: true,
                isTabTwoActive: false,
            });
            document.getElementById('my-review-list').classList.remove('d-none');
            document.getElementById('pending-review-list').className='review-list d-none';
           
        } else if (e.target.name == 'pending-review') {
            this.setState({
                isTabOneActive: false,
                isTabTwoActive: true,
            });
            document.getElementById('pending-review-list').classList.remove('d-none');
            document.getElementById('my-review-list').className='review-list d-none';
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
                            <div className="review-list" id="my-review-list">
                                {this.props.myReviews.map((review) => {
                                    return <ReviewItem
                                    key={review._id}
                                        review={review}
                                    ></ReviewItem>
                                })}
                            </div>
                            <div className="review-list d-none" id="pending-review-list">
                                {this.props.pendingReviews.map((review) => {
                                    return <ReviewItemPending
                                        review={review}
                                        key={review.id}
                                    ></ReviewItemPending>
                                })}
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