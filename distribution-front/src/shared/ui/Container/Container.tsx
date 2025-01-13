import React, {FC} from 'react';
import css from "./Container.module.css"

interface ContainerProps {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({children}) => {
    return (
        <div className={css.container}>
            {children}
        </div>
    );
};

export default Container;