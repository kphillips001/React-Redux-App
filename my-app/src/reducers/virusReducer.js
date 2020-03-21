import {GET_DATA, UPDATE_DATA, SET_ERROR} from '../actions';

const initialState = {
    data: {
        Countries: []
    },
    isFetchingData: false,  
};

export const virusReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case UPDATE_DATA:
            return {
                ...state,
                data: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
          return {
            ...state,
            isFetchingData: false,
            error: action.payload
          };
            default:
            return state;
    }
};