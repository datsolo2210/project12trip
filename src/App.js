import React, { Component } from 'react';
import Header from './components/header/header';
import './assets/css/App.css';
import './assets/css/listQuickReview.css';
import './assets/css/quickReview.css';
import './assets/css/searchArea.css';
import './assets/css/style.css';
import './assets/css/reviewDetail.css';
import routes from './routes';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentAccount} from './actions/AuthActions';

import { getCookie } from './helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getCookie("session_id")
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location} }} />
  )} ></Route>
)

class App extends Component {
  componentDidMount() {
    this.props.getCurrentAccount();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Header></Header>
          {this.showContentMenus(routes)}

        </div>
      </BrowserRouter>

    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        if (['/login', '/register'].indexOf(route.path) < 0) {
          return (
            <PrivateRoute key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></PrivateRoute>
          );
        } else {
          return (
            <Route key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            ></Route>
          );
        }
      });
    }
    return <Switch>{result}</Switch>
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentAccount: () => dispatch(getCurrentAccount())
  }
}

export default connect(null, mapDispatchToProps)(App);
