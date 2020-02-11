import { BUY_CAKE } from './bakaryType';

const initialState = {
  numberOfCake: 10
};

export const bakaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      console.log('bakaryReducer');
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1
      };
    }
    default:
      return state;
  }
};
