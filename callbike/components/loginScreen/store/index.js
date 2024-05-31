// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from '../reducers/authReducer';

// // Kết hợp các reducers thành rootReducer
// const rootReducer = combineReducers({
//   auth: authReducer,
//   // Thêm các reducers khác nếu có
// });

// // Tạo store và áp dụng middleware
// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../actions/authSlice'; 

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;


import { combineReducers } from 'redux';
import authReducer from '../actions/authSlice';
// import other reducers

const rootReducer = combineReducers({
  auth: authReducer,
  // other reducers
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
