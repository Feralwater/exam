import React from 'react';
import s from "./SetValue.module.css"

type PropsInputType = {
    onChange: (value: number) => void
    value: number
    className: string
}

const SetValue: React.FC<PropsInputType> = (
    {children, value, onChange, className}
) => {
    return (
        <div className={s.container}>
            <div className={s.text}>{children}:</div>
            <input
                className={s[className]}
                type="number"
                value={value}
                onChange={(e) => onChange(+e.currentTarget.value)}
            />
        </div>
    );
};

export default SetValue;