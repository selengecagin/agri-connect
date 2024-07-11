import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AskQuestionState {
    title: string;
    body: string;
    tags: string[];
    file: File | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: AskQuestionState = {
    title: '',
    body: '',
    tags: [],
    file: null,
    status: 'idle',
    error: null,
};

const askQuestionSlice = createSlice({
    name: 'askQuestion',
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setBody(state, action: PayloadAction<string>) {
            state.body = action.payload;
        },
        setTags(state, action: PayloadAction<string[]>) {
            state.tags = action.payload;
        },
        setFile(state, action: PayloadAction<File | null>) {
            state.file = action.payload;
        },
        askQuestionStart(state) {
            state.status = 'loading';
            state.error = null;
        },
        askQuestionSuccess(state) {
            state.status = 'succeeded';
            state.title = '';
            state.body = '';
            state.tags = [];
            state.file = null;
        },
        askQuestionFailure(state, action: PayloadAction<string>) {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { setTitle, setBody, setTags, setFile, askQuestionStart, askQuestionSuccess, askQuestionFailure } = askQuestionSlice.actions;
export default askQuestionSlice.reducer;
