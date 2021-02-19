import { combineReducers } from 'redux';
import cakeReducer from './cakes/CakeReducer';
import iceCreamReducer from './icecream/IceCreamReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
});
export default rootReducer;
