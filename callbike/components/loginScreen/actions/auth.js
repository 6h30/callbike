import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    // Giả lập một API call
    const response = await fakeApiCall(username, password);
    await AsyncStorage.setItem('userToken', response.token);
    await AsyncStorage.setItem('userData', JSON.stringify(response.user));
    dispatch({ type: LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: 'Invalid username or password' });
  }
};

export const logout = () => async dispatch => {
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userData');
  dispatch({ type: LOGOUT });
};

// Giả lập một API call
const fakeApiCall = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        resolve({
          token: 'fake-jwt-token',
          user: { first_name: 'John', last_name: 'Doe' }
        });
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1000);
  });
