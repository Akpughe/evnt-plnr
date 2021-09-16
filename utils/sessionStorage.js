const sessionStorageKey = 'x-auth-token';

export const getUserFromSession = () => {
  try {
    const serializedUser = sessionStorage.getItem(localStorage.token);
    if (serializedUser === null) {
      return undefined;
    }
    return JSON.parse(serializedUser);
  } catch (e) {
    throw new Error('Could not fetch user object from session storage');
  }
};

export const saveUserToSession = (user) => {
  try {
    const serializedUser = JSON.stringify(user);
    sessionStorage.setItem(localStorage.token, serializedUser);
  } catch (e) {
    throw new Error('Could not save user object to session storage');
  }
};

export const clearSessionState = () => {
  try {
    sessionStorage.removeItem(localStorage.token);
  } catch (e) {
    throw new Error('Could not delete user object from session storage');
  }
};
