import { BUY_CAKE } from './CakeTypes';
const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      if (state.numberOfCakes <= 0) {
        return { numberOfCakes: 0 };
      }
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
