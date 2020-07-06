import React from 'react';

class Counter extends React.Component {
  state = {
    number: 0
  };

  increaseNum = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decreaseNum = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <p>값 : {this.state.number}</p>
        <button onClick={this.increaseNum}>+</button>
        <button onClick={this.decreaseNum}>-</button>
      </div>
    );
  }
}

export default Counter;
