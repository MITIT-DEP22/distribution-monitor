import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "../shared/enum/RouterNames";
import MainPage from "./MainPage/MainPage";
import DistributionsPage from "./DistributionsPage/DistributionsPage";
import DistributionsTablePage from "./DistributionsTablePage/DistributionsTablePage";
import DistributionsDiagramsPage from "./DistributionsDiagramsPage/DistributionsDiagramsPage";
import ManagePage from "./ManagePage/ManagePage";
import ToDoPage from "./ToDoPage/ToDoPage";

const Routing = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<MainPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS} element={<DistributionsPage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_TABLE} element={<DistributionsTablePage/>}/>
            <Route path={RouterNames.DISTRIBUTIONS_DIAGRAM} element={<DistributionsDiagramsPage/>}/>
            <Route path={RouterNames.TODO} element={<ToDoPage/>}/>
            <Route path={RouterNames.ADMIN} element={<ManagePage/>}/>
        </Routes>
    );
};

export default Routing;