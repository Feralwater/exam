import React from 'react';
import s from './App.module.css';
import Button from "./button/Button";
import Settings from "./settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {incrementCountAC, setCountAC, setSettingsAC} from "./redux/counter-reducer";

function App() {

    const count = useSelector<AppStateType, number>(state => state.counter.count);
    const MAXIMUM = useSelector<AppStateType, number>(state => state.counter.MAXIMUM);
    const MINIMUM = useSelector<AppStateType, number>(state => state.counter.MINIMUM);
    const settings = useSelector<AppStateType, boolean>(state => state.counter.settings);
    const dispatch = useDispatch();

    const incrementCount = () => {
        dispatch(incrementCountAC())
    }
    const resetCount = () => {
   dispatch(setCountAC(MINIMUM))
    }

    return (
        <div className={s.App}>
            {!settings && <div className={s.counter_container}>
                <div className={s.display}>
                    <div className={count === MAXIMUM && count > 0 ? s.counter + " " + s.red : s.counter}
                    >{count}
                    </div>
                </div>
                <div className={s.buttons_container}>
                    <Button onClick={incrementCount}
                            disabled={count === MAXIMUM}
                    >inc</Button>
                    <Button onClick={resetCount}
                            disabled={count === MINIMUM}
                    >reset</Button>
                    <Button onClick={() => dispatch(setSettingsAC(true))} disabled={false}>set</Button>
                </div>
            </div>}
            {settings &&
            <Settings/>
            }
        </div>
    );
}

export default App;
