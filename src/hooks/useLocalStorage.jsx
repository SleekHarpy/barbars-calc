import {useState} from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);

            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    const removeValue = (objKey) => {
        try {
            if (objKey) {
                const newKey = JSON.parse(window.localStorage.getItem(key));
                delete newKey[objKey];
                window.localStorage.setItem(key, JSON.stringify({...newKey}));
            } else {
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const updateValue = (value) => {
        try {
            const oldValue = JSON.parse(window.localStorage.getItem(key));
            window.localStorage.setItem(key, JSON.stringify({...oldValue, ...value}));
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue, removeValue, updateValue];
};

export default useLocalStorage;
