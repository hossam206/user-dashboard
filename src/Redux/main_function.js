// load users data from api
import { Load_data_failed, Load_Users, Reauest_Load_data } from "./action";
export const fetch_Users_Data = (page) => async (dispatch) => {
  dispatch(Reauest_Load_data());
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const result = await response.json();
    dispatch(Load_Users(result.data, result.total_pages));
  } catch (error) {
    dispatch(Load_data_failed(error.message));
  }
};

