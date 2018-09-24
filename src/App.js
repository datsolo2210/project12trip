import React, { Component } from 'react';
import Header from './components/header/header';
import './assets/css/App.css';
import './assets/css/listQuickReview.css';
import './assets/css/quickReview.css';
import './assets/css/searchArea.css';
import './assets/css/style.css';
import './assets/css/reviewDetail.css';
import routes from './routes';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div className="body">
        <Header></Header>
        {this.showContentMenus(routes)}
        
      </div>
      </Router>

    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if(routes.length >0){
      result = routes.map((route, index) =>{
          return( <Route key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                  ></Route>);
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
