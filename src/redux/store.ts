import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from './score/slice';

export const store = configureStore({
    reducer: {
        scoreReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

