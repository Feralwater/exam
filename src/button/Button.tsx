import React from 'react';

type PropsButtonType = {
    onClick: () => void
}
const Button: React.FC<PropsButtonType> = ({children, onClick}) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;