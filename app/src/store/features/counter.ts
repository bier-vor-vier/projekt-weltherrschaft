import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

const incrementReducer = (state: CounterState) => {
    state.value += 1;
};

const decrementReducer = (state: CounterState) => {
    state.value -= 1;
};
const setCountReducer = (state: CounterState, action: PayloadAction<number>) => {
    state.value = action.payload;
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: incrementReducer,
        decrement: decrementReducer,
        setCount: setCountReducer,
    },
});

export const { increment, decrement, setCount } = counterSlice.actions;

export default counterSlice.reducer;
