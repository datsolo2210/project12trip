import React, { Component } from 'react';
import QuickReview from './components/quickReview/quickReview';
import Header from './components/header/header';
import './App.css';

class App extends Component {

  render() {
    return (
      <body className="body">
      {/* <div className="body"> */}
        <Header />
        <div className="content">
          <div className="main">
            <div className="userLocations">
              <h2>Have you been? Travelers want to see more reviews of these places</h2>
              <QuickReview />
            </div>
          </div>
        </div>
      {/* </div> */}
      </body>

    );
  }
}

export default App;
