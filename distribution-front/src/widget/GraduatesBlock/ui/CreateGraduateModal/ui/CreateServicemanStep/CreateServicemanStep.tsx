import React, {useEffect} from 'react';
import distributionCreateStore from "../../../../../../entity/distribution/store/DistributionCreateStore";
import {observer} from "mobx-react-lite";
import InputWithLabel from "../../../../../../feature/InputWithLabel/InputWithLabel";
import RadioButtonsWithOptions from "../../../../../../feature/RadioButtonsWithOptions/RadioButtonsWithOptions";
import CustomSelect from "../../../../../../feature/CustomSelect/CustomSelect";
import $api from "../../../../../../shared/api";
import rankStore from "../../../../../../entity/serviceman/stores/RankStore";

const CreateServicemanStep = () => {

    const {distribution} = distributionCreateStore
    const {ranks} = rankStore

    // const handleCreateServiceman = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    // }

    useEffect(() => {
        rankStore.fetchRanks()
    }, []);

    const fetchRanks = async () => {
        const response = await $api.get("/military-ranks")
    }

    return (
        <div>
            <InputWithLabel defaultValue={distribution.serviceMan.fullName}
                            onChange={(e) => {
                                distributionCreateStore.setDistribution({
                                    ...distribution,
                                    //@ts-ignore
                                    serviceMan: {...distribution.serviceMan, fullName: e.target.value}
                                });
                            }} width={200} label={"П.І.Б."}/>


            <InputWithLabel defaultValue={distribution.serviceMan.birthdayYear}
                            onChange={(e) => {
                                distributionCreateStore.setDistribution({
                                    ...distribution,
                                    //@ts-ignore
                                    serviceMan: {...distribution.serviceMan, birthdayYear: e.target.value}
                                });
                            }}
                            width={200} type={"number"}
                            label={"Рік народження"}/>

            <CustomSelect defaultValue={ranks[0] ? ranks[0].id : 1} onChange={(e) => {
                distributionCreateStore.setDistribution({
                    ...distribution,
                    //@ts-ignore
                    serviceMan: {...distribution.serviceMan, rankId: e.target.value}
                });
            }} label={"Звання"} options={rankStore.mapForSelectComponent()}/>

            <RadioButtonsWithOptions groupName={"Стать"} options={["Чоловік", "Жінка"]}/>

            <InputWithLabel width={200} type={"text"} label={"Спеціальність"}/>
            <button onClick={fetchRanks}>check</button>
            {JSON.stringify(distribution)}
        </div>
    );
};

export default observer(CreateServicemanStep);