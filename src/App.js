import React, { Component } from 'react';
import Header from './components/header/header';
import './assets/css/App.css';
import './assets/css/listQuickReview.css';
import './assets/css/quickReview.css';
import './assets/css/searchArea.css';
import './assets/css/style.css';
import './assets/css/reviewDetail.css';
import routes from './routes';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

import { getCookie } from './helper';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    (getCookie("isAuthenticated") === '1')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
  )} ></Route>
)

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

  // showContentMenus = () => {
  //   return (
  //     <Switch>
  //       <Route exact path='/register' component={RegisterPage}></Route>
  //       <Route exact path='/login' component={LoginPage}></Route>
  //       <PrivateRoute exact path='/' component={ListReviewPage}></PrivateRoute>
  //       <PrivateRoute exact path='/review-detail' component={ReviewDetailPage}></PrivateRoute>
  //     </Switch>
  //   )
  // }
}

export default App;
