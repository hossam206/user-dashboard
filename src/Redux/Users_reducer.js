import {
  FAILURE_LOAD_DATA,
  REQUEST_LOAD_DATA,
  SEARCH_ABOUT_USER,
  SUCCESS_LOAD_DATA,
} from "./action";

export const initialstate = {
  Users: [],
  totalPages: 0,
  loading: false,
  error: null,
  UserDetails: null,
};
export const Users_Resducer = (state = initialstate, action) => {
  switch (action.type) {
    case REQUEST_LOAD_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SUCCESS_LOAD_DATA:
      return {
        ...state,
        Users: action.payload,
        Users: action.payload.users,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    case FAILURE_LOAD_DATA:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SEARCH_ABOUT_USER:
      return {
        ...state,
        UserDetails: state.Users.find(
          (user) => user.id === parseInt(action.payload)
        ),
      };

    default:
      return state;
  }
};
