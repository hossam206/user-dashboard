export const REQUEST_LOAD_DATA = "REQUEST_LOAD_DATA";
export const SUCCESS_LOAD_DATA = "SUCCESS_LOAD_DATA";
export const FAILURE_LOAD_DATA = "FAILURE_LOAD_DATA";
export const SEARCH_ABOUT_USER = "SEARCH_ABOUT_USER";

// get users data from APi
export const Reauest_Load_data = () => {
  return { type: REQUEST_LOAD_DATA };
};

export const Load_Users = (users, totalPages) => {
  return {
    type: SUCCESS_LOAD_DATA,
    payload: { users, totalPages },
  };
};

export const Load_data_failed = () => {
  return { type: FAILURE_LOAD_DATA };
};

export const Search_about_User = (UserId) => {
  return {
    type: SEARCH_ABOUT_USER,
    payload: UserId,
  };
};
