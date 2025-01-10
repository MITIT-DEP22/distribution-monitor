import React, {useEffect} from 'react';
import css from "./DistributionTableDetails.module.css"
import {useLocation} from "react-router-dom";
import distributionStore from "../../../../entity/distribution/store/DistributionStore";
import {observer} from "mobx-react-lite";

const DistributionTableDetails = () => {


    const location = useLocation();
    const {searchParams} = distributionStore

    useEffect(() => {
        if (location.pathname.split("/")[3] !== "*") {
            distributionStore.setSearchParams({
                type: location.pathname.split("/")[3],
                id: Number(location.pathname.split("/")[4])
            })
        } else {
            distributionStore.setSearchParams({
                type: "",
                id: 0
            })
        }
    }, []);

    return (
        <div>
            {JSON.stringify(searchParams)}
        </div>
    );
};

export default observer(DistributionTableDetails);