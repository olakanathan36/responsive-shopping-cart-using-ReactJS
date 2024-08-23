
import React, { createContext, useReducer, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const TotalCountContext = createContext();

const initialState = { count: 0 };


function counting(state, action) {
    switch (action) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: Math.max(state.count - 1, 0) };
        case 'default':
            return { count: 0 };
        default:
            console.log('error');
            return state;
    }
}

function Main() {
    const [state, dispatch] = useReducer(counting, initialState);
    const { totalCount, setTotalCount } = useContext(TotalCountContext);

    const handleIncrement = () => {
        dispatch('increment');
        setTotalCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        dispatch('decrement');
        setTotalCount(prevCount => Math.max(prevCount - 1, 0));
    };

    const handleReset = () => {
        const difference = state.count;
        dispatch('default');
        setTotalCount(prevCount => prevCount - difference);
    };

    return (
        <>
            <h1>ORANGE COUNT: {state.count}</h1>
            <button onClick={handleIncrement}>Add</button>
            <button onClick={handleDecrement}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}


function Banana() {
    const [state, dispatch] = useReducer(counting, initialState);
    const { totalCount, setTotalCount } = useContext(TotalCountContext);

    const handleIncrement = () => {
        dispatch('increment');
        setTotalCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        dispatch('decrement');
        setTotalCount(prevCount => Math.max(prevCount - 1, 0));
    };

    const handleReset = () => {
        const difference = state.count;
        dispatch('default');
        setTotalCount(prevCount => prevCount - difference);
    };

    return (
        <>
            <h1>APPLE COUNT: {state.count}</h1>
            <button onClick={handleIncrement}>Add</button>
            <button onClick={handleDecrement}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}


function Callmethod() {
    const [state, dispatch] = useReducer(counting, initialState);
    const { totalCount, setTotalCount } = useContext(TotalCountContext);

    const handleIncrement = () => {
        dispatch('increment');
        setTotalCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        dispatch('decrement');
        setTotalCount(prevCount => Math.max(prevCount - 1, 0));
    };

    const handleReset = () => {
        const difference = state.count;
        dispatch('default');
        setTotalCount(prevCount => prevCount - difference);
    };

    return (
        <>
            <h1>BANANA COUNT: {state.count}</h1>
            <button onClick={handleIncrement}>Add</button>
            <button onClick={handleDecrement}>Remove</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

function Call() {
    const [totalCount, setTotalCount] = React.useState(0);

    return (
        <TotalCountContext.Provider value={{ totalCount, setTotalCount }}>
            <Main />
            <Banana />
            <Callmethod />
            <h2>Total Count: {totalCount}</h2>
        </TotalCountContext.Provider>
    );
}

ReactDOM.render(<Call />, document.getElementById('root'));

