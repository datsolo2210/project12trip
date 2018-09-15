import React, { Component } from 'react';
import './searchArea.css';

class searchArea extends Component {
    render() {
        var bedroomNumbers = ['1+ Bedrooms', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
        var bathroomNumbers = ['1+ Bathrooms', '1', '2', '3', '4+'];

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
                                <input type="text" className="form-control" placeholder="City/Region" required />
                            </div>
                            <div className="col-3">
                                <select className="form-control" required>
                                    {
                                        bedroomNumbers.map((item, index) => {
                                            return (<option value={item} key={index}>{item}</option>);
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-3">
                                <select className="form-control" required>
                                    {
                                        bathroomNumbers.map((item, index) => {
                                            return (<option value={item} key={index}>{item}</option>);
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Owner or Manager name (optional)" />
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