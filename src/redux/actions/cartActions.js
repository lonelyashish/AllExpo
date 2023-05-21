// Define your action types
import { ActionTypes } from '../constants/actiontypes';


// Define your action creators
export const addToCart = (item) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (item) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: item,
});
