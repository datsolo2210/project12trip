import React, { Component } from 'react';
class ReplyReview extends Component {
    render() {
        return (
            <div className='comment-reply'>
                <div className='row'>
                    <div className='col-4'>
                        <span style={{fontWeight: 'bold'}}>Nguyen Van Dat</span>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                    <i className="fas fa-thumbs-up icon-like"></i>
                    <small>02/10/2018</small>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        Lưu ý trước khi cài đặt phần mềm: Windows 7 phải được cập nhật bản Services Pack 1
                    </div>
                </div>
            </div>
        );
    }
}

export default ReplyReview;