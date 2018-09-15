import React, { Component } from 'react';

import './quickReview.css';

class FormSubmit extends Component {
    render() {
        return (
            <div>
                <div>
                    <fieldset className="rating" id="rating">
                        <input type="radio" id="star5" name="rating" defaultValue={5} /><label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                        <input type="radio" id="star4" name="rating" defaultValue={4} /><label className="full" htmlFor="star4" title="Pretty good - 4 stars" />
                        <input type="radio" id="star3" name="rating" defaultValue={3} /><label className="full" htmlFor="star3" title="Meh - 3 stars" />
                        <input type="radio" id="star2" name="rating" defaultValue={2} /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars" />
                        <input type="radio" id="star1" name="rating" defaultValue={1} /><label className="full" htmlFor="star1" title="Sucks big time - 1 star" />
                    </fieldset>
                </div>
                <div style={{ clear: 'both' }} className=" form_review" id="form-content">
                    <form id="submit">
                        <div className="form-group">
                            <label className="title_review">Title of your review</label>
                            <input type="text" name="title_review" placeholder="Summarize your visit or hightlight an interesting detail" 
                                className="submit_review form-control" />
                        </div>
                        <div className="form-group">
                        <label className="title_review">Your review</label>
                        <textarea name="your_review" rows={4} cols={100} form="submit" 
                            placeholder="By sharing your experiences, you are helping traveles make better choices and plan their dream trips. Thanks you!" 
                            className="your_review form-control" defaultValue={""} />
                        </div>
                        <div className="form-group">
                            <label className="title_review">When did you travel?</label>
                            <select className='form-control custom-select-box'>
                                <option value="">Select one</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>    
                        <div className="form-check">
                            <input type="checkbox" name="checkbox" className="check_review form-check-input" />
                            <label class="form-check-label">
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