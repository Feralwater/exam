import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./button/Button";
import Settings from "./settings/Settings";

function App() {
    const [count, setCount] = useState<number>(0)
    const [MAXIMUM, setMAXIMUM] = useState<number>(1)
    const [MINIMUM, setMINIMUM] = useState<number>(0)
    const [settings, setSettings] = useState<boolean>(false)
    const incrementCount = () => {
        setCount(prev => prev + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={s.App}>
            {!settings && <div className={s.counter_container}>
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
                    <Button onClick={() => setSettings(true)} disabled={false}>set</Button>
                </div>
            </div>}
            {settings &&
            <Settings setCount={setCount}
                      setMAXIMUM={setMAXIMUM}
                      setMINIMUM={setMINIMUM}
                      setSettings={setSettings}
            />
            }
        </div>
    );
}

export default App;
