import React, { Component } from 'react';
// import ReviewDetail from '../../components/reviewDetail';
import HeadReviewDetail from '../../components/reviewDetail/HeadReviewDetail';
import { actGetDetailHotel } from '../../actions/HotelActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCookie } from '../../helper';
import { actCreateReview } from '../../actions/ReviewAction';

class ReviewDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // hotel: {
            //     photos: []
            // },

            title: "",
            account: getCookie('account'), //account_id
            property:'', //hotel_id
            travel_type: "",
            travel_with: "",
            expect_level: "",
            text_like: "",
            text_dislike: "",
            items: [
                {
                    title: "Staff",
                    level: 4
                },
                {
                    title: "Facilities",
                    level: 4
                },
                {
                    title: "Cleanliness",
                    level: 4
                },
                {
                    title: "Comfort",
                    level: 4
                },
                {
                    title: "Value of money",
                    level: 4
                },
                {
                    title: "Location",
                    level: 4
                }
            ]

        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getHotel(id);
        this.setActiveReact(this.state.items);
        this.setState({
            property: id
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.hotel) {
            this.setState({
                hotel: nextProps.hotel
            },() => {console.log(this.state.hotel)});
        }
    }

    

    onClick = (e) => {
        let name = e.target.name;
        let id = e.target.id;
        let items = this.state.items;
        switch (name) {
            case "Staff": {
                switch (id) {
                    case "Staff1": {
                        items.splice(0, 1, { title: "Staff", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Staff2": {
                        items.splice(0, 1, { title: "Staff", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Staff3": {
                        items.splice(0, 1, { title: "Staff", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Staff4": {
                        items.splice(0, 1, { title: "Staff", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }

            case "Facilities": {
                switch (id) {
                    case "Facilities1": {
                        items.splice(1, 1, { title: "Facilities", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Facilities2": {
                        items.splice(1, 1, { title: "Facilities", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Facilities3": {
                        items.splice(1, 1, { title: "Facilities", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Facilities4": {
                        items.splice(1, 1, { title: "Facilities", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }

            case "Cleanliness": {
                switch (id) {
                    case "Cleanliness1": {
                        items.splice(2, 1, { title: "Cleanliness", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Cleanliness2": {
                        items.splice(2, 1, { title: "Cleanliness", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Cleanliness3": {
                        items.splice(2, 1, { title: "Cleanliness", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Cleanliness4": {
                        items.splice(2, 1, { title: "Cleanliness", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }

            case "Comfort": {
                switch (id) {
                    case "Comfort1": {
                        items.splice(3, 1, { title: "Comfort", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Comfort2": {
                        items.splice(3, 1, { title: "Comfort", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Comfort3": {
                        items.splice(3, 1, { title: "Comfort", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Comfort4": {
                        items.splice(3, 1, { title: "Comfort", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }

            case "ValueOfMoney": {
                switch (id) {
                    case "ValueOfMoney1": {
                        items.splice(4, 1, { title: "Value of money", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "ValueOfMoney2": {
                        items.splice(4, 1, { title: "Value of money", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "ValueOfMoney3": {
                        items.splice(4, 1, { title: "Value of money", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "ValueOfMoney4": {
                        items.splice(4, 1, { title: "Value of money", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }

            case "Location": {
                switch (id) {
                    case "Location1": {
                        items.splice(5, 1, { title: "Location", level: 1 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Location2": {
                        items.splice(5, 1, { title: "Location", level: 2 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Location3": {
                        items.splice(5, 1, { title: "Location", level: 3 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    case "Location4": {
                        items.splice(5, 1, { title: "Location", level: 4 });
                        this.setState({
                            items: items
                        });
                        break;
                    }
                    default: break;
                }
                break;
            }
            default: break;

        }
        this.setActiveReact(items);
        
    }

    setActiveReact = (items) => {
        for (let i = 0; i < 6; i++) {
            let a = items[i];
            switch (i) {
                case 0: {
                    document.getElementById("Staff1").classList.remove('bg-button-icon');
                    document.getElementById("Staff2").classList.remove('bg-button-icon');
                    document.getElementById("Staff3").classList.remove('bg-button-icon');
                    document.getElementById("Staff4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("Staff1").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("Staff2").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("Staff3").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("Staff4").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
                case 1: {
                    document.getElementById("Facilities1").classList.remove('bg-button-icon');
                    document.getElementById("Facilities2").classList.remove('bg-button-icon');
                    document.getElementById("Facilities3").classList.remove('bg-button-icon');
                    document.getElementById("Facilities4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("Facilities1").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("Facilities2").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("Facilities3").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("Facilities4").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
                case 2: {
                    document.getElementById("Cleanliness1").classList.remove('bg-button-icon');
                    document.getElementById("Cleanliness2").classList.remove('bg-button-icon');
                    document.getElementById("Cleanliness3").classList.remove('bg-button-icon');
                    document.getElementById("Cleanliness4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("Cleanliness1").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("Cleanliness2").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("Cleanliness3").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("Cleanliness4").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
                case 3: {
                    document.getElementById("Comfort1").classList.remove('bg-button-icon');
                    document.getElementById("Comfort2").classList.remove('bg-button-icon');
                    document.getElementById("Comfort3").classList.remove('bg-button-icon');
                    document.getElementById("Comfort4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("Comfort1").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("Comfort2").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("Comfort3").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("Comfort4").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
                case 4: {
                    document.getElementById("ValueOfMoney1").classList.remove('bg-button-icon');
                    document.getElementById("ValueOfMoney2").classList.remove('bg-button-icon');
                    document.getElementById("ValueOfMoney3").classList.remove('bg-button-icon');
                    document.getElementById("ValueOfMoney4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("ValueOfMoney1").className = 'bg-button-icon  btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("ValueOfMoney2").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("ValueOfMoney3").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("ValueOfMoney4").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
                case 5: {
                    document.getElementById("Location1").classList.remove('bg-button-icon');
                    document.getElementById("Location2").classList.remove('bg-button-icon');
                    document.getElementById("Location3").classList.remove('bg-button-icon');
                    document.getElementById("Location4").classList.remove('bg-button-icon');
                    switch (a.level) {
                        case 1: {
                            document.getElementById("Location1").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 2: {
                            document.getElementById("Location2").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 3: {
                            document.getElementById("Location3").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        case 4: {
                            document.getElementById("Location4").className = 'bg-button-icon btn-icon';
                            break;
                        }
                        default: break;
                    }
                    break;
                }
            }
        }
    }

    submitReview = (e) => {
        e.preventDefault();
        let {title, account, property, travel_type, travel_with, expect_level, text_like, text_dislike, items} = this.state;
        let review = {
            title: title,
            account: account,
            property: property,
            travel_type: travel_type,
            travel_with: travel_with,
            expect_level: expect_level,
            text_like: text_like,
            text_dislike: text_dislike,
            items: items
        };
        console.log(review);
        if(travel_type.length===0|| travel_with.length===0 || expect_level.length===0 || text_dislike.length===0 || text_like === 0) alert('please ');
        else
        this.props.creatReview(review);
        let {history}=this.props;
        history.goBack();
    }

    onChange = (e) => {
        let target = e.target;
        this.setState({
            [target.name] : target.value
        }, () => {console.log(this.state)})
        let {travel_type, travel_with, expect_level} = this.state;
        if(travel_type.length!==0 && travel_with.length!==0 && expect_level.length!==0) document.getElementById('thanks').classList.remove('d-none');
        // let type = target.type;
        // switch(type){
        //     case 'text': {
        //         this.setState({
        //             title: target.value
        //         });
        //         break;
        //     }
        //     case 'textarea': {
        //         this.setState({
        //             [target.name] : target.value
        //         });
        //         break;
        //     }
        //     case 'checkbox' : {
        //         this.setState({
        //             travel_with: target.value
        //         })
        //         break;
        //     }
        //     case 'radio' :{
        //         this.setState({
        //             expect_level: target.value
        //         })
        //         break;
        //     }
        //     default: break;
        // }

    }

    render() {
        const purposeList = ["Business", "Leisure", "Other"];
        const itemPurpose = purposeList.map((item, index) => {
            return (<React.Fragment key={index}><label><input type="radio" name="travel_type" defaultValue={item} onChange={this.onChange}/>{item}</label><br /></React.Fragment>)
        });

        const travelerList = ["Alone", "Friends", "Partner", "Family (with children under 18 years old)", "Colleague(s)", "Pet"];
        const travelers = travelerList.map((traveler, index) => {
            return (<React.Fragment key={index}><label><input type="checkbox" name="travel_with" defaultValue={traveler} onChange={this.onChange}/>{traveler}</label><br /></React.Fragment>)
        });

        const rdList3 = ["No", "Yes", "It exceeded my expectations"];
        const rd3 = rdList3.map((item, index) => {
            return (<React.Fragment key={index}><label><input type="radio" name="expect_level" defaultValue={item} onChange={this.onChange}/>{item}</label><br /></React.Fragment>)
        });

        return (
            <div className="review-detail">
                <div className="body-review">
                    <HeadReviewDetail hotel={this.props.hotel}></HeadReviewDetail>
                    <form onSubmit={this.submitReview}>
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
                        <div className="checkAnswer d-none" id="thanks">
                            <span><img src={require('../../imgs/check-answer.png')} alt='icon' className="icon-check-answer" /></span>
                            <span>Thanks for your answer!</span>
                        </div>
                        <div className="mg-top-40">
                            <h2 className="title-purpose">2. Rate this property:</h2>
                            <label className="location_address">Choose your ratting</label><br/>
                            <label className="th-rate">Staff</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="Staff" id="Staff1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Staff" id="Staff2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Staff" id="Staff3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Staff" id="Staff4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Facilities</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="Facilities" id="Facilities1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Facilities" id="Facilities2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Facilities" id="Facilities3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Facilities" id="Facilities4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Cleanliness</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="Cleanliness" id="Cleanliness1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Cleanliness" id="Cleanliness2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Cleanliness" id="Cleanliness3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Cleanliness" id="Cleanliness4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Comfort</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="Comfort" id="Comfort1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Comfort" id="Comfort2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Comfort" id="Comfort3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Comfort" id="Comfort4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Value of money</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="ValueOfMoney" id="ValueOfMoney1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="ValueOfMoney" id="ValueOfMoney2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="ValueOfMoney" id="ValueOfMoney3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="ValueOfMoney" id="ValueOfMoney4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                            <label className="th-rate">Location</label>
                            <div className="row form-group">
                                <div className="col-3 "><button className='btn-icon' name="Location" id="Location1" onClick={this.onClick} type="button"><img src={require("../../imgs/sad-icon.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Location" id="Location2" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie-face-md.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Location" id="Location3" onClick={this.onClick} type="button"><img src={require("../../imgs/smilie.png")} alt="icon" className="icon-rate" /></button></div>
                                <div className="col-3 "><button className='btn-icon' name="Location" id="Location4" onClick={this.onClick} type="button"><img src={require("../../imgs/happy.png")} alt="icon" className="icon-rate" /></button></div>
                            </div>

                        </div>

                        <div className="mg-top-40">
                            <h2 className="title-purpose">3. Could you tell us a little more?</h2>
                            <label className="th-rate">What did you like?</label>
                            <textarea
                                name="text_like" rows={4} cols={120} form="submit"
                                placeholder="Were the croissants extra flakey? the bed extra comfy?"
                                className=" form-control"
                                defaultValue={""}
                                onChange={this.onChange}
                                required
                            />

                            <label className="th-rate">What didn't you like?</label>
                            <textarea
                                name="text_dislike" rows={4} cols={120} form="submit"
                                placeholder="What could have been better?"
                                className=" form-control"
                                defaultValue={""}
                                onChange={this.onChange}
                                required
                            />


                            <label className="th-rate">Title your review:</label>
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                onChange={this.onChange}
                                required
                            />
                        </div>

                        {/* <div className="mg-top-40">
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
                        </div> */}
                        <input type="submit" name="submit" value="Submit" className="btn_submit" />
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        hotel: state.hotel.hotelReview,
        newReview: state.review.newReview
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        getHotel: (id) => {
            dispatch(actGetDetailHotel(id));
        },
        creatReview: (review) => {
            dispatch(actCreateReview(review));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewDetailPage));