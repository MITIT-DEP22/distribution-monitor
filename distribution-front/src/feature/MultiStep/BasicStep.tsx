import React, {FC} from 'react';

interface BasicStepProps {
    children: React.ReactNode;
    title: string;
}

const BasicStep: FC<BasicStepProps> = ({children, title}) => {
    return children
};

export default BasicStep;