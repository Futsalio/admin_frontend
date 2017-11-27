const initialState = {
  collapsed: false,
  sloganText: true,
}

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TOGGLE':
      return {...state, collapsed: action.collapsed, sloganText: action.sloganText}
    default:
      return state
  }
}
