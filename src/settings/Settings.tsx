import React from 'react';
import s from "../App.module.css";
import SetValue from "../setValue/SetValue";
import Button from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    disableSetAC,
    setCountAC,
    setMaximumSettingsAC,
    setMinimumSettingsAC,
    setSettingsAC,
} from "../redux/counter-reducer";
import {AppStateType} from "../redux/store";

const Settings: React.VFC = () => {

    const disableSet = useSelector<AppStateType, boolean>(state => state.counter.disableSet);
    const MAXIMUM = useSelector<AppStateType, number>(state => state.counter.MAXIMUM);
    const MINIMUM = useSelector<AppStateType, number>(state => state.counter.MINIMUM);
    const dispatch = useDispatch();

    const setMaxValue = (value: number) => {
        dispatch(setMaximumSettingsAC(value))
        dispatch(disableSetAC(false))
    }
    const setStartValue = (value: number) => {
        dispatch(setMinimumSettingsAC(value))
        dispatch(disableSetAC(false))
    }

    const setValue = () => {
        dispatch(setMaximumSettingsAC(MAXIMUM))
        dispatch(setMinimumSettingsAC(MINIMUM))
        dispatch(setCountAC(MINIMUM))
        dispatch(disableSetAC(true))
        dispatch(setSettingsAC(false));
    }
    return (
        <div className={s.counter_container}>
            <div className={s.display}>
                <SetValue onChange={setMaxValue}
                          value={MAXIMUM}
                          className={MINIMUM >= MAXIMUM ? "redInput" : "input"}
                >max value</SetValue>
                <SetValue onChange={setStartValue}
                          value={MINIMUM}
                          className={MINIMUM >= MAXIMUM ? "redInput" : "input"}
                >start value</SetValue>
            </div>
            <div className={s.buttons_container}>
                <Button onClick={setValue}
                        disabled={disableSet || MINIMUM >= MAXIMUM}
                >set</Button>
            </div>
        </div>
    );
};

export default Settings;