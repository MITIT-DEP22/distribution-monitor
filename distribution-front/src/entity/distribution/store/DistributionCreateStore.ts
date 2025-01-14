import {action, makeAutoObservable, makeObservable} from "mobx";
import {DistributionCreateDto} from "../model/types";

class DistributionCreateStore {

    distribution: DistributionCreateDto = {
        serviceMan: {
            fullName: "",
            birthdayYear: 2003,
            rankId: 1,

        }
    } as DistributionCreateDto;

    constructor() {
        makeAutoObservable(this)
    }

    @action
    setDistribution(newDistribution: DistributionCreateDto) {
        this.distribution = newDistribution
    }


}

const distributionCreateStore = new DistributionCreateStore();
export default distributionCreateStore