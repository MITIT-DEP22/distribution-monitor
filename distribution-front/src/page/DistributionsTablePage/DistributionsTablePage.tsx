import React from 'react';
import css from "./DistributionsTablePage.module.css"
import DistributionTable from "../../widget/DistributionTable/DistributionTable";
import Title from "../../shared/ui/Title/Title";
import DistributionTableDetails
    from "../../widget/DistributionTable/ui/DistributionTableDetails/DistributionTableDetails";

const DistributionsTablePage = () => {


    return (
        <div className={css.container}>
            <Title value={"Таблиця розподілу"}/>
            <DistributionTableDetails/>
            <DistributionTable/>
        </div>
    );
};

export default DistributionsTablePage;