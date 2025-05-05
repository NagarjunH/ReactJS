import { useState } from "react";

function Taunter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(prev => prev + 1);
    }
    function handleDecrement() {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    }

    // * Adding Reset Functionality

    function handleReset() {
        setCount(0);
    }

    // * Increment Number By 5

    function handleStep() {
        setCount(prev => prev + 5);
    }

    // * Agar value 100 ke upar jati hai to Increment button disabled ho jaye



    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement} disabled={count === 0}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleStep}>Plus(+5)</button>
        </>
    );
}

export default Taunter;