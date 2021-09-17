import React from 'react';
import s from "./Button.module.css"

type PropsButtonType = {
    onClick: () => void
    disabled: boolean
}
const Button: React.FC<PropsButtonType> = ({children, onClick, disabled}) => {
    return (
        <button
            className={s.btn}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;