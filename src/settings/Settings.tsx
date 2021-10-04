import React, {useEffect, useState} from 'react';
import s from "../App.module.css";
import SetValue from "../setValue/SetValue";
import Button from "../button/Button";


type SettingsPropsType = {
    setCount: (count: number) => void
    setMAXIMUM: (maximum: number) => void
    setMINIMUM: (minimum: number) => void
    setSettings: (setting: boolean) => void
}

const Settings: React.VFC<SettingsPropsType> = (
    {setCount, setMAXIMUM, setMINIMUM, setSettings}
) => {
    const [minimum, setMinimum] = useState<number>(0)
    const [maximum, setMaximum] = useState<number>(1)
    const [disableSet, setDisableSet] = useState<boolean>(false)

    useEffect(() => {
        const savedMaximum = localStorage.getItem("maxCounterValue")
        const savedMinimum = localStorage.getItem("minCounterValue")
        if (savedMaximum && savedMinimum) {
            const newMaximum = JSON.parse(savedMaximum)
            const newMinimum = JSON.parse(savedMinimum)
            setMaximum(newMaximum)
            setMinimum(newMinimum)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem("maxCounterValue", JSON.stringify(maximum))
        localStorage.setItem("minCounterValue", JSON.stringify(minimum))
    }, [minimum, maximum])

    const setMaxValue = (value: number) => {
        setMaximum(value);
        setDisableSet(false);
    }
    const setStartValue = (value: number) => {
        setMinimum(value);
        setDisableSet(false);
    }

    const setValue = () => {
        setMAXIMUM(maximum);
        setMINIMUM(minimum);
        setCount(minimum);
        setDisableSet(true);
        setSettings(false);
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