import React, {FC} from 'react';
import css from "./Button.module.css"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    width?:number|string;
    height?:number|string;
}

const Button: FC<ButtonProps> = ({onClick, children, width,height}) => {
    return (
        <button style={{height:height, width:width}} onClick={onClick} className={css.btn}>
            {children}
        </button>
    );
};

export default Button;