import React, { Component } from 'react';
class ReplyReview extends Component {
    render() {
        const vote = this.props.vote;
        return (
            <div className='comment-reply'>
                <div className='row'>
                    <div className='col-4'>
                        <span style={{fontWeight: 'bold'}}>{vote.account.name}</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                    <i className="fas fa-thumbs-up icon-like"></i>
                    <small><i>{new Date(vote.created).toLocaleString()}</i></small>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {vote.comment}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReplyReview;