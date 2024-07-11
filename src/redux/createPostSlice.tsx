import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreatePostState {
    image: string | null;
    description: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CreatePostState = {
    image: null,
    description: '',
    status: 'idle',
    error: null,
};

const createPostSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        setImage(state, action: PayloadAction<string | null>) {
            state.image = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
        },
        createPostStart(state) {
            state.status = 'loading';
            state.error = null;
        },
        createPostSuccess(state) {
            state.status = 'succeeded';
            state.image = null;
            state.description = '';
        },
        createPostFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { setImage, setDescription, createPostStart, createPostSuccess, createPostFailure } = createPostSlice.actions;
export default createPostSlice.reducer;
