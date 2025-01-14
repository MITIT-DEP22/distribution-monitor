import React, {FC} from 'react';
import css from './InputWithLabel.module.css';

interface InputWithLabelProps extends React.HTMLProps<HTMLInputElement> {
    label: string,
    width?: number,
    height?: number,
}

const InputWithLabel: FC<InputWithLabelProps> = ({
                                                     onChange,
                                                     label,
                                                     type,
                                                     className,
                                                     style,
                                                     defaultValue,
                                                     disabled,
                                                     width,
                                                     height
                                                 }) => {
    return (
        <div style={style} className={`${css.container} ${className}`}>
            <span style={style} className={css.label}>{label}</span>
            <input disabled={disabled} defaultValue={defaultValue} style={{...style, width, height}}
                   className={css.input}
                   onChange={onChange} type={type}/>
        </div>
    );
};

export default InputWithLabel;