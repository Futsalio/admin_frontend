export function checkLogin () {
  if(localStorage.getItem("futsalio")) {
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem("futsalio");
  
  return window.location.href = '/login';
}
