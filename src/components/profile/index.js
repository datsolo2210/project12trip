import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const {account} = this.props;
        return (
            <div className="profile">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                        <img className="avatar" src="https://www.blakors.no/wp-content/uploads/2018/02/team-mann.jpg"/>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7">
                        <h5>{account.name}</h5>
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
                        {account.birthday ? new Date(account.birthday).toLocaleDateString('en-GB') : 'Undefined'}
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