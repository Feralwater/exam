import React from 'react';

type PropsButtonType = {
    onClick: () => void
    disabled: boolean
}
const Button: React.FC<PropsButtonType> = ({children, onClick, disabled}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;