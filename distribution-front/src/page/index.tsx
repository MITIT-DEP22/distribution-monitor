import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "../shared/enum/RouterNames";
import MainPage from "./MainPage/MainPage";
import DistributionsPage from "./DistributionsPage/DistributionsPage";
import DistributionsTablePage from "./DistributionsTablePage/DistributionsTablePage";
import DistributionsDiagramsPage from "./DistributionsDiagramsPage/DistributionsDiagramsPage";
import AddGraduatePage from "./AddGraduatePage/AddGraduatePage";
import ManagePage from "./ManagePage/ManagePage";

const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<MainPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS} element={<DistributionsPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_TABLE} element={<DistributionsTablePage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_DIAGRAM} element={<DistributionsDiagramsPage/>}/>
            <Route path={RouterNames.ADMIN} element={<ManagePage/>}/>
            <Route path={RouterNames.ADD_GRADUATE} element={<AddGraduatePage/>}/>
        </Routes>
    );
};

export default Routing;