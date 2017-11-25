export function checkLogin () {
  if(localStorage.getItem('futsalio')) {
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem('futsalio');

  return window.location.href = '/login';
}

export function isSuperAdmin() {
  let user = JSON.parse(localStorage.getItem('futsalio'));

  if(user.role === 'SA') {
    return true;
  }

  return false;
}

export function isAdmin() {
  let user = JSON.parse(localStorage.getItem('futsalio'));

  if(user.role === 'AF') {
    return true;
  }

  return false;
}

export function isOwner() {
  let user = JSON.parse(localStorage.getItem('futsalio'));

  if(user.role === 'OT') {
    return true;
  }

  return false;
}

export function isAdminFutsal() {
  let user = JSON.parse(localStorage.getItem('futsalio'));

  if(user.role === 'AT') {
    return true;
  }

  return false;
}
