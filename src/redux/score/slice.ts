import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
    score: 0,
}

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        setScore(state, action: PayloadAction<number>) {
            state.score = action.payload;
        }
    }
})

export const selectScore = (state: RootState) => state.scoreReducer.score;
export const { setScore } = scoreSlice.actions;
export default scoreSlice.reducer;