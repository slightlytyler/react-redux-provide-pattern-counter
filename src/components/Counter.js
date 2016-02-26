import React, { PropTypes, Component } from 'react';

export default class Counter extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementCount: PropTypes.func.isRequired,
    decrementCount: PropTypes.func.isRequired,
    doubleCountAsync: PropTypes.func.isRequired,
  };

  render() {
    const {
      count,
      incrementCount,
      decrementCount,
      doubleCountAsync,
    } = this.props;

    return (
      <div>
        <div>Current count: {count}</div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
        <button onClick={doubleCountAsync}>x2</button>
      </div>
    );
  }
}