
export const saveStateToLocalStorage = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('store', serializedState);
    } catch (e) {
        console.error('Could not save state to localStorage', e);
    }
};

export const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('store');
        if (serializedState === null) return undefined; // Kein Zustand vorhanden
        return JSON.parse(serializedState);
    } catch (e) {
        console.error('Could not load state from localStorage', e);
        return undefined;
    }
};