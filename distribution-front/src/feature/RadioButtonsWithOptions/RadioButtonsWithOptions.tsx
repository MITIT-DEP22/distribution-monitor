import React, {FC} from 'react';
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import css from "./RadioButtonsWithOptions.module.css"

interface RadioButtonsWithOptions {
    options: string[];
    groupName: string;
}

const RadioButtonsWithOptions: FC<RadioButtonsWithOptions> = ({options, groupName}) => {

    const genOptions = () =>
        <>
            {
                options.map((option, index) =>
                    <InputWithLabel defaultChecked={index === 0} name={groupName} type={"radio"} label={option}/>
                )
            }
        </>


    return (
        <div   className={css.container}>
            <span className={css.groupName}>{groupName}</span>
            <div className={css.optionsContainer}>
                {genOptions()}
            </div>
        </div>

    );
};

export default RadioButtonsWithOptions;