import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import postReducer from './postSlice';

const store = configureStore({
    reducer: {
        post: postReducer,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
