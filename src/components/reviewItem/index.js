import React, { Component } from 'react';

class ReviewItem extends Component {
    render() {
        const { review } = this.props;

        var avg_rate = 0;
        review.items.map(item => {
            return avg_rate += item.level;
        })

        return (
            <div className="row review-item">   
                <div className="col-8">
                    <small><i>Review for hotel {review.property} - Created at {new  Date(review.created).toLocaleString()}</i></small>
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
                        <button className="btn btn-vote"><i className="fas fa-thumbs-up"></i></button>
                        <button className="btn btn-vote"><i className="fas fa-thumbs-down"></i></button>
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

export default ReviewItem;