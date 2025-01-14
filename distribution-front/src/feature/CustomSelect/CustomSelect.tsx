import React, {FC} from 'react';
import css from "./CustomSelect.module.css"
import {SelectOption} from "./types/types";

interface CustomSelectProps extends React.HTMLProps<HTMLSelectElement> {
    options: SelectOption[],
    label?: string
}



const CustomSelect: FC<CustomSelectProps> = ({
                                                 options,
                                                 defaultValue,
                                                 onChange,
                                                 label
                                             }) => {
    return (
        <div className={css.container}>
            <span className={css.label}>{label}</span>
            <select onChange={onChange} defaultValue={defaultValue} className={css.select}>
                {options.map((option: SelectOption) =>
                    <option value={option.value} key={option.value}>{option.label}</option>
                )}
            </select>
        </div>
    );
};

export default CustomSelect;