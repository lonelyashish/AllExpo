import axios from "axios";
import { ActionTypes } from "../constants/actiontypes";

export const fetchApiData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      dispatch({ type: ActionTypes.FETCH_ALL_DATA, payload: response.data });
    } catch (error) {
      dispatch({ type: ActionTypes.FETCH_ERROR, payload: error.message });
    }
  };
};

export const addToCart = (item) => ({
  type: ActionTypes.ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (item) => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: item,
});
