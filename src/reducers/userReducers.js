const initialState = {
  data: [],
  fetching: false,
  fetched: true,
  error: null,
  errorCount: 0,
  message: null,
  isLogin: false,
  user: null
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {...state, fetching: true, fetched: false, error: null}
    case 'FETCH_SUCCESS':
      return {...state, fetching: false, fetched: true, data: action.payload, error: null, message: 'fetch success'}
    case 'FETCH_ERROR':
      return {...state, fetching: false, fetched: true, error: action.payload}
    case 'LOGIN':
      return {...state, user: action.payload, isLogin: action.isLogin, error: action.error, errorCount: action.errorCount}
    case 'LOGIN_LOCALSTORAGE':
      return {...state, isLogin: true, user: action.payload, error: null}
    default:
      return state
  }
}
