import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import './main.style.scss';

export default class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <h1>Example app</h1>
        <Link to="/other">Other page</Link>
      </div>
    );
  }
}

Main.propTypes = {
  name: string,
};
