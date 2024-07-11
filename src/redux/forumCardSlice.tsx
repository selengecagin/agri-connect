import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../api/axiosInstance';
import { RootState, AppDispatch } from './store';

interface Question {
    questionId: string;
    title: string;
    body: string;
    userId: string;
    favoriteCount: number;
    likeCount: number;
    commentCount: number;
    categoryTags: string[];
    imageIds: string[];
}

interface ForumCardState {
    questions: Question[];
    loading: boolean;
    error: string | null;
}

const initialState: ForumCardState = {
    questions: [],
    loading: false,
    error: null,
};

export const fetchQuestions = createAsyncThunk<Question[], void, { rejectValue: string }>(
    'forumCard/fetchQuestions',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/api/questions');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

const forumCardSlice = createSlice({
    name: 'forumCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {
                state.loading = false;
                state.questions = action.payload;
            })
            .addCase(fetchQuestions.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch questions';
            });
    }
});

export default forumCardSlice.reducer;
