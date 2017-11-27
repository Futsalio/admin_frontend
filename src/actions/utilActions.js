export function changeToggle(collapsed, sloganText) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_TOGGLE',
      collapsed: collapsed,
      sloganText: sloganText
    })
  }
}
