import {makeObservable} from "mobx";
import {DistributionCreateDto} from "../model/types";

class DistributionCreateStore {

    newDistribution: DistributionCreateDto = {} as DistributionCreateDto;

    constructor() {
        makeObservable(this)
    }


}

const distributionCreateStore = new DistributionCreateStore();
export default distributionCreateStore