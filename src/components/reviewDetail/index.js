import React, { Component } from 'react';
import HeadReviewDetail from './HeadReviewDetail';

class ReviewDetail extends Component {
    render() {
        const purposeList = ["Business", "Leisure", "Other"];
        const itemPurpose = purposeList.map((item, index) => {
            return (<React.Fragment><label><input type="radio" name="purpose" defaultValue={item} key={index} />{item}</label><br /></React.Fragment>)
        });

        const travelerList = ["Alone", "Friends", "Partner", "Family (with children under 18 years old)", "Colleague(s)", "Pet"];
        const travelers = travelerList.map((traveler, index) => {
            return (<React.Fragment><label><input type="checkbox" name={traveler} defaultValue={traveler} key={index} />{traveler}</label><br /></React.Fragment>)
        });

        const rdList3 = ["No", "Yes", "It exceeded my expectations"];
        const rd3 = rdList3.map((item, index) => {
            return (<React.Fragment><label><input type="radio" name="rd3" defaultValue={item} key={index} />{item}</label><br /></React.Fragment>)
        });

        return (
            <div className="review-detail">
                <div className="body-review">
                <HeadReviewDetail></HeadReviewDetail>
                    <form>
                        <div className="mg-top-40">
                            <h2 className="title-purpose">1. Purpose of your trip? *</h2>
                            {itemPurpose}
                        </div>
                        <div className="mg-top-20">
                            <h2 className="title-purpose">Who did you travel with?</h2>
                            <label className="location_address">Select all that apply</label><br />
                            {travelers}
                        </div>
                        <div className="mg-top-20">
                            <h2 className="title-purpose">Did the property meet your expectation?</h2>
                            {rd3}
                        </div>
                        <div className="checkAnswer">
                            <span><img src={require('../../imgs/check-answer.png')} alt='icon' className="icon-check-answer" /></span>
                            <span>Thanks for your answer!</span>
                        </div>
                        <div className="mg-top-40">
                            <h2 className="title-purpose">2. Rate this property:</h2>
                            <label className="location_address">Your rating will impact the review score</label><br />
                            <label className="th-rate">Staff</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Facilities</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Cleanliness</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Comfort</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Value of money</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Location</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon'><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                        </div>

                        <div className="mg-top-40">
                            <h2 className="title-purpose">3. Could you tell us a little more?</h2>
                            <label className="th-rate">What did you like?</label>
                            <textarea
                                name="your_review" rows={4} cols={120} form="submit"
                                placeholder="Were the croissants extra flakey? the bed extra comfy?"
                                className=" form-control"
                                defaultValue={""}
                            />

                            <label className="th-rate">What didn't you like?</label>
                            <textarea
                                name="your_review" rows={4} cols={120} form="submit"
                                placeholder="What could have been better?"
                                className=" form-control"
                                defaultValue={""}
                            />


                            <label className="th-rate">Title your review:</label>
                            <input
                                type="text"
                                name="title_review"
                                className="form-control"
                            />
                        </div>

                        <div className="mg-top-40">
                            <h2 className="title-purpose">4. Photos <span className="optional">(Optional)</span></h2>
                            <label className="location_address">Adding photos of your stay helps others make informed decisions!</label><br />
                        </div>
                        <div className="row form-group">
                            <div className="col-3">
                                <button className="btn-photo">Add property photos</button>
                            </div>
                            <div className="col-3">
                                <button className="btn-photo">Add city photos</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default ReviewDetail;