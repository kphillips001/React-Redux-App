import { GET_DATA } from '../actions';

const initialSate = {
  jokes: [],
  isFetchingData: false
}; 

export const jokesReducer = ( state = initialSate, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        isFetchingData: true
      };
    default: 
      return state;
  }
}