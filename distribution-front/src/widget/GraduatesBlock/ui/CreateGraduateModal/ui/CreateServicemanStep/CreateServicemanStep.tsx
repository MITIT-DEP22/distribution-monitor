import React from 'react';
import distributionCreateStore from "../../../../../../entity/distribution/store/DistributionCreateStore";
import {observer} from "mobx-react-lite";
import InputWithLabel from "../../../../../../feature/InputWithLabel/InputWithLabel";

const CreateServicemanStep = () => {

    const {newDistribution} = distributionCreateStore

    const handleCreateServiceman = (e: React.ChangeEvent<HTMLInputElement>) => {

    }


    // export type Rank = {
    //     id:number;
    //     militaryRank:string;
    // }
    //
    // export type ServicemanCreateDto = {
    //     fullName:string;
    //     rank:Rank;
    //     birthdayYear:number;
    //     sex:string;
    //     specialty:string;
    // }

    return (
        <div>
            <form action="">
                <InputWithLabel width={200} label={"П.І.Б."}/>
                <InputWithLabel width={200} type={"date"} label={"Дата народження"}/>

            </form>
        </div>
    );
};

export default observer(CreateServicemanStep);