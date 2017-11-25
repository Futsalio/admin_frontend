import Axios from 'axios';

import { USER_API } from '../utils/api';

export const fetchUser = () => {
  return dispatch => {
    dispatch({type: 'FETCH_USER'})
    Axios.get(USER_API)
      .then((res) => {
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_ERROR',
          payload: error
        })
      })
  }
}

export const login = (result, error) => {
  return dispatch => {
    dispatch({ type: 'LOGIN', payload: result, error: error})
  }
}
