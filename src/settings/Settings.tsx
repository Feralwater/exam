import React, {useEffect, useState} from 'react';
import s from "../App.module.css";
import SetValue from "../setValue/SetValue";
import Button from "../button/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    disableSetAC,
    setCountAC,
    setMaximumSettingsAC,
    setMinimumSettingsAC,
    setSettingsAC
} from "../redux/counter-reducer";
import {AppStateType} from "../redux/store";

const Settings: React.VFC = () => {

    const minimum = useSelector<AppStateType, number>(state => state.counter.minimum);
    const maximum = useSelector<AppStateType, number>(state => state.counter.maximum);
    const disableSet = useSelector<AppStateType, boolean>(state => state.counter.disableSet);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedMaximum = localStorage.getItem("maxCounterValue")
        const savedMinimum = localStorage.getItem("minCounterValue")
        if (savedMaximum && savedMinimum) {
            const newMaximum = JSON.parse(savedMaximum)
            const newMinimum = JSON.parse(savedMinimum)
            dispatch(setMaximumSettingsAC(newMaximum))
            dispatch(setMinimumSettingsAC(newMinimum))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("maxCounterValue", JSON.stringify(maximum))
        localStorage.setItem("minCounterValue", JSON.stringify(minimum))
    }, [minimum, maximum])

    const setMaxValue = (value: number) => {
        dispatch(setMaximumSettingsAC(value))
        dispatch(disableSetAC(false))
    }
    const setStartValue = (value: number) => {
        dispatch(setMinimumSettingsAC(value))
        dispatch(disableSetAC(false))
    }

    const setValue = () => {
        dispatch(setMaximumSettingsAC(maximum))
        dispatch(setMinimumSettingsAC(minimum))
        dispatch(setCountAC(minimum))
        dispatch(disableSetAC(true))
        dispatch(setSettingsAC(false));
    }
    return (
        <div className={s.counter_container}>
            <div className={s.display}>
                <SetValue onChange={setMaxValue}
                          value={maximum}
                          className={minimum >= maximum ? "redInput" : "input"}
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
    );
};

export default Settings;