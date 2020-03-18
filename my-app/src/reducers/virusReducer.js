import { GET_DATA } from '../actions';

const initialSate = {
  data: {
    Countries: []
  },
  isFetchingData: false
}; 

export const virusReducer = ( state = initialSate, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        isFetchingData: true
      };
    case "UPDATE_DATA":
      return {
        ...state,
        isFetchingData: false
      }  

    default: 
      return state;
  }
};