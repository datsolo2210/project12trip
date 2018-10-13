import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from '../../components/profile';
import { getMyReviews, getPendingReviews, getMyVoted } from '../../actions/ReviewAction';
import ReviewItem from '../../components/reviewItem';
import ReviewItemPending from '../../components/reviewItemPending';
import Pagination from '../../components/pagination';
import _ from 'lodash';

class Homepage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            activeTab: 1,
        }
    }

    componentDidMount() {
        this.props.getMyReviews();
        // this.props.getPendingReviews();
        // this.props.getMyVoted();

    }
    shouldComponentUpdate(nextProps, nextStates) {
        return nextProps !== this.props
    }

    changeState(e) {
        if (e.target.name == 'your-review') {
            this.setState({
                activeTab: 1
            }, () => {
                this.props.getMyReviews();
            });
            document.getElementById('my-review-list').classList.remove('d-none');
            document.getElementById('voted-list').className = 'review-list d-none';
            document.getElementById('pending-review-list').className = 'review-list d-none';

        }
        if (e.target.name == 'pending-review') {
            this.setState({
                activeTab: 2
            }, () => {
                this.props.getPendingReviews();
            });
            document.getElementById('pending-review-list').classList.remove('d-none');
            document.getElementById('voted-list').className = 'review-list d-none';
            document.getElementById('my-review-list').className = 'review-list d-none';
        }
        else if (e.target.name == 'your-voted') {
            this.setState({
                activeTab: 3
            }, () => {
                this.props.getMyVoted();
            });
            document.getElementById('voted-list').classList.remove('d-none');
            document.getElementById('pending-review-list').className = 'review-list d-none';
            document.getElementById('my-review-list').className = 'review-list d-none';
        }
    }

    onChangePage = (destinationPage) => {
        switch(this.state.activeTab) {
            case 1: {
                this.props.getMyReviews(destinationPage);
                break;
            }
            case 2: {
                this.props.getPendingReviews(destinationPage);
                break;
            }
            case 3: {
                this.props.getMyVoted(destinationPage);
                break;
            }
            default: {
                break;
            }
        }
    }

    shouldComponentUpdate(nextProps, nextStates) {
        const {myReviews, pendingReviews, myVoted} = this.props;
        var isPropsChange = true;
        var isStateChange = true;

        if(_.isEqual(myReviews, nextProps.myReviews) && _.isEqual(pendingReviews, nextProps.pendingReviews) && _.isEqual(myVoted, nextProps.myVoted)) {
            isPropsChange = false;
        }

        if(_.isEqual(this.state, nextStates)) isStateChange = false;

        return (isPropsChange || isStateChange);
    }

    render() {
        const { account } = this.props;
        console.log(111111111);
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
                                    <a className={`nav-link ${(this.state.activeTab == 1) ? 'active' : ''}`} name="your-review" href="#" onClick={(e) => this.changeState(e)}>
                                        <b>Your Review</b>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${(this.state.activeTab == 2) ? 'active' : ''}`} name="pending-review" href="#" onClick={(e) => this.changeState(e)}>
                                        <b>Pending Review</b>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${(this.state.activeTab == 3) ? 'active' : ''}`} name="your-voted" href="#" onClick={(e) => this.changeState(e)}>
                                        <b>Voted</b>
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
                                <Pagination current={this.props.current_page} pages={this.props.pages} changePage={this.onChangePage}></Pagination>
                            </div>
                            <div className="review-list d-none" id="pending-review-list">
                                {this.props.pendingReviews.map((review) => {
                                    return <ReviewItemPending
                                        review={review}
                                        key={review._id}
                                        test={() => this.test()}
                                    ></ReviewItemPending>
                                })}
                                <Pagination current={this.props.current_page} pages={this.props.pages} changePage={this.onChangePage}></Pagination>
                            </div>
                            <div className="review-list d-none" id="voted-list">
                                {this.props.myVoted.map((review) => {
                                    return <ReviewItem
                                        review={review}
                                        key={review._id}
                                    ></ReviewItem>
                                })}
                                <Pagination current={this.props.current_page} pages={this.props.pages} changePage={this.onChangePage}></Pagination>
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
        pendingReviews: state.review.pendingReviews,
        myVoted: state.review.myVoted,
        current_page: state.review.current_page,
        pages: state.review.pages
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMyReviews: (page) => dispatch(getMyReviews(page)),
        getPendingReviews: (page) => dispatch(getPendingReviews(page)),
        getMyVoted: (page) => dispatch(getMyVoted(page))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));