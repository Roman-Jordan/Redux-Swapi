import {FETCH_ERROR,FETCH_SUCCESS,FETCH} from "../actions";
const initialState = {
  characters: [],
  fetching:false,
  error:null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching:!state.fetching
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: !state.fetching
      }

    case FETCH_ERROR:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
};
