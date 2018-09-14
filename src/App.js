import React, { Component } from 'react';
import QuickReview from './components/quickReview/quickReview';
import Header from './components/header/header';
import './App.css';
import ListQuickReview from './components/listQuickReview/listQuickReview';
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
