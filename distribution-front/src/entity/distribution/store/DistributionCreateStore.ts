import {makeAutoObservable, makeObservable} from "mobx";
import {DistributionCreateDto} from "../model/types";

class DistributionCreateStore {

    newDistribution: DistributionCreateDto = {} as DistributionCreateDto;

    constructor() {
        makeAutoObservable(this)
    }


}

const distributionCreateStore = new DistributionCreateStore();
export default distributionCreateStore