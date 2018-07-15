import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import Profile from './Profile';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/profile/:id/" component={Profile}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;