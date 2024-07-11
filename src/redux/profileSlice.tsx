import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Image {
    imageId: string;
    name: string;
    type: string;
    filePath: string;
}

interface User {
    userId: string;
    name: string;
    bio: string;
    profilePhotoId: string;
    postIds: string[];
    profilePhoto?: Image;
}

interface Post {
    postId: string;
    userId: string;
    title: string;
    content: string;
    images: Image[];
    favoriteCount: number;
    likeCount: number;
    commentCount: number;
    categoryTags: string[];
    commentIds: string[];
    isPrivate: boolean;
    location: string;
    shareCount: number;
    createdAt: string;
    updatedAt: string;
}

interface ProfileState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    user: User | null;
    posts: Post[];
}

const initialState: ProfileState = {
    status: 'idle',
    error: null,
    user: null,
    posts: [],
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        fetchProfile(state) {
            state.status = 'loading';
        },
        fetchProfileSuccess(state, action: PayloadAction<{ user: User; posts: Post[] }>) {
            state.status = 'succeeded';
            state.user = action.payload.user;
            state.posts = action.payload.posts;
            state.error = null;
        },
        fetchProfileFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
        updateProfile(state, action: PayloadAction<User>) {
            state.user = action.payload;
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

export const {
    fetchProfile,
    fetchProfileSuccess,
    fetchProfileFailure,
    updateProfile,
    updateProfileSuccess,
    updateProfileFailure,
} = profileSlice.actions;

export default profileSlice.reducer;
