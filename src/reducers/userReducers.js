const initialState = {
  data: [],
  fetching: false,
  fetched: true,
  error: null,
  message: null,
  isLogin: false,
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {...state, fetching: true, fetched: false}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload, error: null, message: 'fetch success'}
    case 'FETCH_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    case 'LOGIN':
      return {...state, isLogin: action.payload, error: action.error}
    default:
      return state
  }
}
