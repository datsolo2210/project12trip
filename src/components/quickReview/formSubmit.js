import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            title_review: "",
            your_review: "",
            chkb: false,
            month: ""

        };
        this.changeRating = this.changeRating.bind(this);
    }

    

    changeRating(newRating, name) {
        this.setState({
            rating: newRating
        });
        console.log(this.state.rating);
        document.getElementById(this.props.id).classList.remove('d-none');
    }

    render() {
        let selectMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let months = selectMonth.map((month, index) => {
            return (<option value={month} key={index}>{month}</option>);
        });
        return (
            <div>
                <div>
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="yellow"
                        starHoverColor="yellow"
                        changeRating={this.changeRating}
                        starDimension="25px"
                        starSpacing="2px"
                        numberOfStars={5}
                        name='rating'
                    />
                </div>
                <div style={{ clear: 'both' }} className="d-none form_review" id={this.props.id}>
                    <form id="submit">
                        <div className="form-group">
                            <label className="title_review">Title of your review</label>
                            <input 
                                type="text" 
                                name="title_review" 
                                placeholder="Summarize your visit or hightlight an interesting detail"
                                className="submit_review form-control"                            
                            />
                        </div>
                        <div className="form-group">
                            <label className="title_review">Your review</label>
                            <textarea 
                                name="your_review" rows={4} cols={100} form="submit"
                                placeholder="By sharing your experiences, you are helping traveles make better choices and plan their dream trips. Thanks you!"
                                className="your_review form-control" 
                                defaultValue={""} 
                            />
                        </div>
                        <div className="form-group">
                            <label className="title_review">When did you travel?</label>
                            <select 
                                className='form-control custom-select-box'
                                name="month"
                            >
                                <option value="">Select one</option>
                                {months}
                            </select>
                        </div>
                        <div className="form-check">
                            <input 
                                type="checkbox" 
                                name="chkb" 
                                className="check_review form-check-input"                                    
                            />
                            <label className="form-check-label">
                                <small>
                                    I certify that this review is based on my own experience and is my genuine opinion of this hotel,
                                    and that I have no personal or business relationship with this establishment, and have not been offered
                                    any incentive or payment originating from the establishment to write this review.
                                    I understand that TripAdvisor has a zero-tolerance policy on fake reviews.
                                </small>
                            </label>
                        </div>
                        <input type="submit" name="submit" value="Submit" className="btn_submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default FormSubmit;