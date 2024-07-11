import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import userReducer from './userSlice';
import forumCardReducer from './forumCardSlice';
import profileReducer from './profileSlice';
import createPostReducer from './createPostSlice';
import askQuestionReducer from './askQuestionSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    forumCard: forumCardReducer,
    profile: profileReducer,
    createPost: createPostReducer,
    askQuestion: askQuestionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;