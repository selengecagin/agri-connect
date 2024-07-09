import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';

const store = configureStore({
    reducer: {
        post: postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
