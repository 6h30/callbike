import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppThunk } from '../store'; // Đảm bảo đường dẫn này đúng theo cấu trúc dự án của bạn

interface User {
  first_name: string;
  last_name: string;
}

interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
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
    loginSuccess(state, action: PayloadAction<{ token: string; user: User }>) {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload.user;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.loading = false;
      state.user = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout, setLoading } = authSlice.actions;

export const login = (username: string, password: string): AppThunk => async (dispatch) => {
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

export const performLogout = (): AppThunk => async (dispatch) => {
  await AsyncStorage.removeItem('userToken');
  await AsyncStorage.removeItem('userData');
  dispatch(logout());
};

export const checkAuthStatus = (): AppThunk => async (dispatch) => {
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
const fakeApiCall = (username: string, password: string): Promise<{ token: string; user: User }> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'dc' && password === 'ad') {
        resolve({
          token: 'fake-jwt-token',
          user: { first_name: 'Truong', last_name: 'Duc' },
        });
      } else {
        reject(new Error('sai ten dang nhap hoac mat khau'));
      }
    }, 1000);
  });
