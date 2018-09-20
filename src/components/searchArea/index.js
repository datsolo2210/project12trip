import React, { Component } from 'react';

class searchArea extends Component {
    render() {
        var bedroomNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

        return (
            <div>
                <div className="text-center">
                    <h1>Help us find your vacation rental</h1>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row form-group">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="City/Region or Hotel" required />
                            </div>
                            <div className="col-3">
                                <input type="date" className="form-control" placeholder="Check in" />
                            </div>
                            <div className="col-3">
                                <input type="date" className="form-control" placeholder="Check out" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6">
                                <select className="custom-select">
                                    {
                                        bedroomNumbers.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>{item}</option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Property ID (optional)" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-4"></div>
                            <div className="col-4">
                                <button className='btn btn-search'>Search Vacation Rental</button>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
}

export default searchArea;