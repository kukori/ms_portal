import { GET_ADMINS, ADD_ADMIN, DELETE_ADMIN, SET_CURRENT_ADMIN, CLEAR_CURRENT_ADMIN, UPDATE_ADMIN, SET_LOADING } from '../actions/types';

const initialState = {
  admins: [],
  currentAdmin: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
        isLoading: false
      };
    case ADD_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.payload],
        isLoading: false
      };
    case DELETE_ADMIN:
      return {
        ...state,
        admins: state.admins.filter(admin => admin._id !== action.payload),
        isLoading: false
      };
    default:
      return state;
  }
}
