// store/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   isAuthenticated: false,
//   loading: true,
//   user: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess(state, action) {
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.user = action.payload.user;
//     },
//     loginFailure(state, action) {
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.user = null;
//     },
//     setLoading(state, action) {
//       state.loading = action.payload;
//     },
//   },
// });

// export const { loginRequest, loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

// export const login = (username, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await fakeApiCall(username, password);
//     await AsyncStorage.setItem('userToken', response.token);
//     await AsyncStorage.setItem('userData', JSON.stringify(response.user));
//     dispatch(loginSuccess(response));
//   } catch (error) {
//     dispatch(loginFailure('Invalid username or password'));
//   }
// };

// export const performLogout = () => async (dispatch) => {
//   await AsyncStorage.removeItem('userToken');
//   await AsyncStorage.removeItem('userData');
//   dispatch(logout());
// };

// export const checkAuthStatus = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   const token = await AsyncStorage.getItem('userToken');
//   const userData = await AsyncStorage.getItem('userData');
//   if (token && userData) {
//     dispatch(loginSuccess({ token, user: JSON.parse(userData) }));
//   } else {
//     dispatch(setLoading(false));
//   }
// };

// export default authSlice.reducer;

// // Giả lập một API call
// const fakeApiCall = (username, password) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === 'ductruong' && password === 'admin@123') {
//         resolve({
//           token: 'fake-jwt-token',
//           user: { first_name: 'Truong', last_name: 'Duc' },
//         });
//       } else {
//         reject(new Error('Invalid username or password'));
//       }
//     }, 1000);
//   });



// // store/authSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   isAuthenticated: false,
//   loading: true,
//   user: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess(state, action) {
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.user = action.payload.user;
//     },
//     loginFailure(state, action) {
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.user = null;
//     },
//     setLoading(state, action) {
//       state.loading = action.payload;
//     },
//   },
// });

// export const { loginRequest, loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

// export const login = (username, password) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await fakeApiCall(username, password);
//     await AsyncStorage.setItem('userToken', response.token);
//     await AsyncStorage.setItem('userData', JSON.stringify(response.user));
//     dispatch(loginSuccess(response));
//   } catch (error) {
//     dispatch(loginFailure('Invalid username or password'));
//   }
// };

// export const performLogout = () => async (dispatch) => {
//   await AsyncStorage.removeItem('userToken');
//   await AsyncStorage.removeItem('userData');
//   dispatch(logout());
// };

// export const checkAuthStatus = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   const token = await AsyncStorage.getItem('userToken');
//   const userData = await AsyncStorage.getItem('userData');
//   if (token && userData) {
//     dispatch(loginSuccess({ token, user: JSON.parse(userData) }));
//   } else {
//     dispatch(setLoading(false));
//   }
// };

// export default authSlice.reducer;

// // Giả lập một API call
// const fakeApiCall = (username, password) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === 'dcviet' && password === 'admin') {
//         resolve({
//           token: 'fake-jwt-token',
//           user: { first_name: 'Truong', last_name: 'Duc' },
//         });
//       } else {
//         reject(new Error('Invalid username or password'));
//       }
//     }, 1000);
//   });


import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fakeApiCall(username, password);
    await AsyncStorage.setItem('userToken', response.token);
    await AsyncStorage.setItem('userData', JSON.stringify(response.user));
    dispatch(loginSuccess(response));
  } catch (error) {
    dispatch(loginFailure('sai ten or mk'));
  }
};

export const performLogout = () => async (dispatch) => {
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userData');
  dispatch(logout());
};

// export const checkAuthStatus = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   const token = await AsyncStorage.getItem('userToken');
//   const userData = await AsyncStorage.getItem('userData');
//   if (token && userData) {
//     dispatch(loginSuccess({ token, user: JSON.parse(userData) }));
//   } else {
//     dispatch(setLoading(false));
//   }
// };

export const checkAuthStatus = () => async (dispatch) => {
  dispatch(setLoading(true));
  const token = await AsyncStorage.getItem('userToken');
  const userData = await AsyncStorage.getItem('userData');
  if (token && userData) {
    dispatch(loginSuccess({ token, user: JSON.parse(userData) }));
  } else {
    dispatch(setLoading(false));
  }
  return Promise.resolve(); // Trả về một promise để đảm bảo hàm này luôn trả về một promise
};

export default authSlice.reducer;

// Giả lập một API call
const fakeApiCall = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'dc' && password === 'ad') {
        resolve({
          token: 'fake-jwt-token',
          user: { first_name: 'Truong', last_name: 'Duc' },
        });
      } else {
        reject(new Error('sai'));
      }
    }, 1000);
  });
