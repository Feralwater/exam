import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./button/Button";

function App() {
    const MAX: number = 5;
    const MIN: number = 0;
    const [count, setCount] = useState<number>(0)
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div className={s.App}>
            <div className={s.counter_container}>
                <div className={s.display}>
                    <div className={count === MAX ? s.counter + " " + s.red : s.counter}>{count}</div>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={incrementCount} disabled={count === MAX}>inc</Button>
                    <Button onClick={resetCount} disabled={count === MIN}>reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
