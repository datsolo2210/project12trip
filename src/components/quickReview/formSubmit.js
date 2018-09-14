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
                        <span className="title_review">Title of your review</span><br />
                        <input type="text" name="title_review" placeholder="Summarize your visit or hightlight an interesting detail" className="submit_review" /><br />
                        <span className="title_review">Your review</span><br />
                        <textarea name="your_review" rows={4} cols={100} form="submit" placeholder="By sharing your experiences, you are helping traveles make better choices and plan their dream trips. Thanks you!" className="your_review" defaultValue={""} /><br />
                        <span className="title_review">When did you travel?</span><br />
                        <select>
                            <option value="Select one">Select one</option>
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
                        </select><br />
                        <input type="checkbox" name="checkbox" className="check_review" /><span className="check_review"> I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that TripAdvisor has a zero-tolerance policy on fake reviews.</span><br />
                        <input type="submit" name="submit" value="Submit" className="btn_submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default FormSubmit;