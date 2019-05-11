import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageMain from '../pages/main';
import PageOther from '../pages/other';
import './app.style.scss';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/other" component={PageOther} />
            <Route component={PageMain} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
