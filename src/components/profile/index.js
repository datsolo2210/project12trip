import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const {account} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <img className="avatar" src="https://www.blakors.no/wp-content/uploads/2018/02/team-mann.jpg"/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <h4>{account.name}</h4>
                        <p>Rating</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label>Phone:</label>
                    </div>
                    <div className="col-9">
                        {account.phone}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label>Email:</label>
                    </div>
                    <div className="col-9">
                        {account.email}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label>Birthday:</label>
                    </div>
                    <div className="col-9">
                        {account.birthday ? account.birthday : 'Undefined'}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <label>Gender:</label>
                    </div>
                    <div className="col-9">
                        {account.gender ? account.gender : 'Undefined'}
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;