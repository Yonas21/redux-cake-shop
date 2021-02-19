import { BUY_ICE_CREAM } from './IceCreamTypes';
const initialState = {
  numberOfIceCreams: 15,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      if (state.numberOfIceCreams <= 0) {
        return { numberOfIceCreams: 0 };
      }
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    default:
      return state;
  }
};
export default iceCreamReducer;
