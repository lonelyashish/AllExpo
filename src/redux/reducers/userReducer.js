import { ActionTypes } from '../constants/actiontypes';

const initialState = {
  data: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action,"action");
  switch (action.type) {
    case ActionTypes.FETCH_ALL_DATA:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case ActionTypes.FETCH_ERROR:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;



// export const userReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionTypes.FETCH_ALL_DATA:
//       console.warn(ActionTypes.FETCH_ALL_DATA,"FETCH_ALL_DATA reducers called")
//       return {
//         data: action.data
//       }

//           // case ActionTypes.ADD_TO_CONSENT_LIST:
//     //   //logic for add Consent
//     //   state.push(ActionTypes.payload);
//     //   console.warn("Reducers", ActionTypes.ADD_TO_CONSENT_LIST);
//     //   return [action.data];


//     // case ActionTypes.FETCH_CONSENT_LIST_DELETE:
//     //   //logic for delete Consent
//     //   console.warn("Reducers", ActionTypes.FETCH_CONSENT_LIST_DELETE);
//     //   return data;


//     // case ActionTypes.SET_CONSENT_LIST_EDIT:
//     //   //logic for EDIT
//     //   console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_EDIT);
//     //   return data;


//     // case ActionTypes.SET_CONSENT_LIST_VIEW:
//     //   //logic for VIEW
//     //   console.warn("Reducers", ActionTypes.SET_CONSENT_LIST_VIEW);
//     //   return data;


//     default:
//       return state;
//   }
// }