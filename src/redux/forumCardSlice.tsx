import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { RootState } from './store';
import { axiosInstance } from '../api/axiosInstance';

// Tipi burada tanımlayın ve dışa aktarın
export interface ForumCard {
    id: number;
    title: string;
    content: string;
    votes: number;
    answers: number;
    views: number;
    tags: string[];
    username: string;
    timestamp: string;
}

interface ForumCardState {
    data: ForumCard[];
    page: number;
    loading: boolean;
    hasMore: boolean;
    error: string | null;
}

const initialState: ForumCardState = {
    data: [],
    page: 1,
    loading: false,
    hasMore: true,
    error: null,
};

export const fetchForumData = createAsyncThunk<
    ForumCard[],
    number,
    { state: RootState }
>(
    'forumCard/fetchForumData',
    async (page: number) => {
        const response: AxiosResponse<ForumCard[]> = await axiosInstance.get(`/api/forum?page=${page}`);
        return response.data;
    }
);

const forumCardSlice = createSlice({
    name: 'forumCard',
    initialState,
    reducers: {
        incrementPage(state) {
            state.page += 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchForumData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchForumData.fulfilled, (state, action: PayloadAction<ForumCard[]>) => {
                state.data.push(...action.payload);
                state.loading = false;
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchForumData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
});

export const { incrementPage } = forumCardSlice.actions;

export default forumCardSlice.reducer;
