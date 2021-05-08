import { MAKE_REQUEST , GET_DATA , ERROR} from "./types";
import axios from 'axios'
const BASE_URL = 'https://limitless-cliffs-76265.herokuapp.com/https://jobs.github.com/positions.json';
export const fetchUsers = (params, page) => {
  return (dispatch) => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch(make_request())
    axios
      .get(BASE_URL, {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page: page, ...params }
      })
      .then(response => {
        // response.data is the users
        const users = response.data
        console.log(users)
        dispatch(get_data(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(err(error.message))
      })
  }
}


export const make_request = () => {
    return{
      type:MAKE_REQUEST, 
    }
  }
  
  export const get_data = (jobs) => {
    return{
      type:GET_DATA, 
      payload: jobs,
    }
  }

  export const err = (error) => {
      return{
        type:ERROR,
        payload:error,
      }
     
    }
  