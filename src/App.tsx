import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./button/Button";
import SetValue from "./setValue/SetValue";

let MAXIMUM: number = 1;
let MINIMUM: number = 0;
let disableSet: boolean = false;

function App() {
    const [count, setCount] = useState<number>(0)
    const [minimum, setMinimum] = useState<number>(0)
    const [maximum, setMaximum] = useState<number>(1)
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const setMaxValue = (value: number) => {
        setMaximum(value);
        disableSet = false;
    }
    const setStartValue = (value: number) => {
        setMinimum(value);
        disableSet = false;
    }

    const setValue = () => {
        MAXIMUM = maximum;
        MINIMUM = minimum;
        setCount(minimum);
        disableSet = true;
        return {
            MAXIMUM,
            MINIMUM
        }
    }

    return (
        <div className={s.App}>
            <div className={s.counter_container}>
                <div className={s.display}>
                    <SetValue onChange={setMaxValue}
                              value={maximum}
                              className={+minimum >= maximum ? "redInput" : "input"}
                    >max value</SetValue>
                    <SetValue onChange={setStartValue}
                              value={minimum}
                              className={minimum >= maximum ? "redInput" : "input"}
                    >start value</SetValue>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={setValue}
                            disabled={disableSet || minimum >= maximum}
                    >set</Button>
                </div>
            </div>

            <div className={s.counter_container}>
                <div className={s.display}>
                    <div className={count === MAXIMUM && count > 0 ? s.counter + " " + s.red : s.counter}
                    >{count}</div>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={incrementCount}
                            disabled={count === MAXIMUM}
                    >inc</Button>
                    <Button onClick={resetCount}
                            disabled={count === MINIMUM}
                    >reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
