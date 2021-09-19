import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./button/Button";
import SetValue from "./setValue/SetValue";

let MAXIMUM: string = "0";
let MINIMUM: string = "0";
let disableSet: boolean = false;

function App() {
    const [count, setCount] = useState<number>(0)
    const [minimum, setMinimum] = useState<string>("")
    const [maximum, setMaximum] = useState<string>("")
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    const setMaxValue = (value: string) => {
        setMaximum(value);
        disableSet = false;
    }
    const setStartValue = (value: string) => {
        setMinimum(value);
        disableSet = false;
    }

    const setValue = () => {
        MAXIMUM = maximum;
        MINIMUM = minimum;
        setCount(+minimum);
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
                    <SetValue onChange={setMaxValue} value={maximum}>max value</SetValue>
                    <SetValue onChange={setStartValue} value={minimum}>start value</SetValue>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={setValue} disabled={disableSet}>set</Button>
                </div>
            </div>

            <div className={s.counter_container}>
                <div className={s.display}>
                    <div className={count === +MAXIMUM && count > 0 ? s.counter + " " + s.red : s.counter}>{count}</div>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={incrementCount} disabled={count === +MAXIMUM}>inc</Button>
                    <Button onClick={resetCount} disabled={count === +MINIMUM}>reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
