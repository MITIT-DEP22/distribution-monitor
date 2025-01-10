import React from 'react';
import DistributionBlock from "../../widget/DistributionBlock/DistributionBlock";
import Title from "../../shared/ui/Title/Title";

const DistributionsPage = () => {
    return (
        <>
            <Title value={"Загальна сторінка розподілу"}/>
            <DistributionBlock/>
        </>
    );
};

export default DistributionsPage;