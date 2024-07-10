import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostState {
    image: string | null;
    description: string;
}

const initialState: PostState = {
    image: null,
    description: '',
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setImage(state, action: PayloadAction<string | null>) {
            state.image = action.payload;
        },
        setDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
        },
    },
});

export const { setImage, setDescription } = postSlice.actions;
export default postSlice.reducer;
export type { PostState };
