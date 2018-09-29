import React, { Component } from 'react';

class ReviewItem extends Component {
    render() {
        const { review } = this.props;

        var avg_rate = 0;
        review.items.map(item => {
            return avg_rate += item.level;
        })

        return (
            <div className="row">
                <div className="col-9">
                    <h5>Review for hotel {review.property} - Created at {review.created}</h5>
                    <h4>{review.title}</h4>
                    <div className="row">
                        <div className="container">
                            <div className="col-4">
                                Expect Level: <span>{review.expect_level}</span>
                            </div>
                            <div className="col-4">
                                Travel type: <span>{review.travel_type}</span>
                            </div>
                            <div className="col-4">
                                Travel with: <span>{review.travel_with}</span>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-success">
                        {review.text_like}
                    </div>
                    <div className="alert alert-warning">
                        {review.text_dislike}
                    </div>
                    <div className="row">
                        <button className="btn"><i className="fas fa-thumbs-up"></i></button>
                        <button className="btn"><i className="fas fa-thumbs-down"></i></button>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">{(avg_rate*10)/24}/10</div>
                            <ul className="list-group">
                                {
                                    review.items.map((item, index) => {
                                        return (
                                            <li className="list-group-item" key={index}>
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
        );
    }
}

export default ReviewItem;