import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../../redux';
// import { buyCake } from '../redux/bakary/bakaryAction';

class BakaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCake: props.numberOfCake,
      buyCake: props.buyCake
    };
  }
  render() {
    // console.log('props', props);
    return (
      <div>
        <h2>Number of cakes :{this.state.numberOfCake}</h2>
        <button onClick={this.state.buyCake}> buyCake </button>
      </div>
    );
  }
}

// function BakaryComponent(props) {
//   return (
//     <div>
//       <h2>Numberofcake - {props.numberOfCake}</h2>
//       <button onClick={props.buyCake}>BuyCake</button>
//     </div>
//   );
// }

const makeStateProps = state => {
  return { numberOfCake: state.numberOfCake };
};

const makeDispatchProps = dispatch => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    }
  };
};

export default connect(
  makeStateProps,
  makeDispatchProps
)(BakaryComponent);
