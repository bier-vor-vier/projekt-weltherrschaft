import { configureStore } from '@reduxjs/toolkit';
import counter from "./features/counter.ts";
import {loadStateFromLocalStorage, saveStateToLocalStorage} from "./storage.ts";

const preloadedState = loadStateFromLocalStorage();

const reducer = {
    counter: counter,
};

const store = configureStore({
    reducer: reducer,
    preloadedState: preloadedState as unknown,
});

store.subscribe(() => {
    saveStateToLocalStorage(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
