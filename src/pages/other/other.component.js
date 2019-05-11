import React from 'react';
import { Link } from 'react-router-dom';
import './other.style.scss';

export default class Other extends React.Component {
  render () {
    return (
      <div className="other">
        <h2>Other Page</h2>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
