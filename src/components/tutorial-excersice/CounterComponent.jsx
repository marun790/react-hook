import React, { Component } from 'react';

class CounterComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCount = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          count {this.state.counter}
        </button>
      </div>
    );
  }
}

export default CounterComponent;
