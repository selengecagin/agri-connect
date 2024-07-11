import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    data: FormData | null; // Profil verilerini burada saklayacağız
}

const initialState: ProfileState = {
    status: 'idle',
    error: null,
    data: null,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action: PayloadAction<FormData>) {
            state.status = 'loading';
            state.data = action.payload;
        },
        updateProfileSuccess(state) {
            state.status = 'succeeded';
            state.error = null;
        },
        updateProfileFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { updateProfile, updateProfileSuccess, updateProfileFailure } = profileSlice.actions;
export default profileSlice.reducer;
