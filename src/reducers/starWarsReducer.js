import {FETCH_ERROR,FETCH_SUCCESS} from "../actions";
const initialState = {
  characters: [],
  fetching:true,
  error:null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: !state.fetching
      }

    case FETCH_ERROR:
      return{
        ...state,
        fetching: !state.fetching,
        error:action.payload
      }
    default:
      return state;
  }
};
