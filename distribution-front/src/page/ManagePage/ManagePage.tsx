import React from 'react';
import css from "./ManagePage.module.css"
import Title from "../../shared/ui/Title/Title";
import GraduatesBlock from "../../widget/GraduatesBlock/GraduatesBlock";

const ManagePage = () => {
    return (
        <>
            <Title value={"Адміністрування"}/>
            <GraduatesBlock/>
        </>
    );
};

export default ManagePage;