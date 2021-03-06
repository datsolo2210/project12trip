import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHotels, fetchAutocomplete } from '../../actions/HotelActions';
import { Link } from 'react-router-dom';
import HotelItem from '../../components/hotelItem';

class HotelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            query: {},
            hotels: []
        };
    }

    onAutocomplete(event) {
        var autoComplete = document.getElementById("autocomplete");
        if (autoComplete != null) autoComplete.classList.remove('d-none');
        this.props.fetchAutocomplete(event.target.value).then((res) => {
            console.log(res);
            if (res.status === 'ko') this.setState({ suggestions: [] });
            this.setState({ suggestions: this.props.suggestions });
        });

    }

    updateLocation(item) {
        document.getElementById("keyword").value = item.text;
        document.getElementById("autocomplete").classList.add('d-none');
        this.setState({
            query: {
                ...this.state.query,
                type: item.type,
                id: item.id,
            }
        });
    }

    onChangeQuery(event) {
        this.setState({
            query: {
                ...this.state.query,
                [event.target.name]: event.target.value
            }
        });
    }

    onSubmit() {
        if (document.getElementById('keyword').value.length === 0) alert('you must choose a location');
        else {
            document.getElementById('results').classList.remove('d-none');
            this.props.fetchHotels(this.state.query).then(res => {
                if (res) {
                    this.setState({ hotels: res.payload })
                }
            });
        }
    }

    render() {
        var bedroomNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

        var { hotels } = this.state;

        return (
            <div className="content">
                <div className="main">

                    <div>
                        <div className="text-center">
                            {/* <Link to='/review-detail'>Detail</Link> */}
                            <h1>Help us find your vacation rental</h1>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-10">
                                <div className="row form-group">
                                    <div className="col-8">
                                        <label>Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="City/Region or Hotel"
                                            id="keyword" name="keyword"
                                            onChange={(event) => this.onAutocomplete(event)} required
                                        />
                                        {
                                            !this.state.suggestions ? null : (
                                                <div id="autocomplete">
                                                    <ul className="list-group">
                                                        {
                                                            this.state.suggestions.map((item, index) => {
                                                                return (
                                                                    <li className="list-group-item" key={index} onClick={() => this.updateLocation(item)}>{item.text}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className="col-4" style={{ marginTop: 5 }}>
                                        <br />
                                        <button className='btn btn-search' onClick={() => this.onSubmit()}>Search Vacation Rental </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="results" className="d-none">
                        {
                            hotels.length === 0 ? (
                                <div id="loading">
                                    <img src="http://www.autopricemanager.com/img/widget-loader-lg-en.gif" id="loading-image" alt="Loading..." />
                                </div>
                            ) : (
                                    <div>
                                        {this.showHotels(hotels)}
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>

        );
    }


    showHotels(hotels) {
        let result = null;
        if (hotels.length > 0) {
            result = hotels.map((hotel, index) => {
                return (
                    <HotelItem key={hotel.hotel_id} hotel={hotel}></HotelItem>
                )
            });
        }
        return result;
    }
}



const mapStateToProps = (state) => {
    return {
        hotels: state.hotel.hotels,
        suggestions: state.hotel.autocompleteResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHotels: (query) => dispatch(fetchHotels(query)),
        fetchAutocomplete: (keyword) => dispatch(fetchAutocomplete(keyword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelList);
