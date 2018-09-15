import React, { Component } from 'react';
import './listQuickReview.css';
class ListQuickReview extends Component {
  render() {
    return (
      <div>
        <h2>Have you been? Travelers want to see more reviews of these places</h2>
        {this.props.children}
      </div>
    );
  }
}

export default ListQuickReview;