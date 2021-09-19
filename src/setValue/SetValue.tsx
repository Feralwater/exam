import React from 'react';
import s from "./SetValue.module.css"

type PropsInputType = {
    onChange: (value: string) => void
    value: string
}

const SetValue: React.FC<PropsInputType> = ({children, value, onChange}) => {
    return (
        <div className={s.container}>
            <div className={s.text}>{children}:</div>
            <input
                className={s.input}
                type="number"
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
        </div>
    );
};

export default SetValue;