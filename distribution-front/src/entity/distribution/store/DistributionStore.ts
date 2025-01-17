import {action, makeAutoObservable, observable} from "mobx";
import {Distribution} from "../model/types";
import $api from "../../../shared/api";


class DistributionStore {
    @observable distributions: Distribution[] = [];
    @observable count: number = 0;
    @observable isLoading: boolean = true;
    @observable hasMore: boolean = true;
    @observable searchParams: { id: number, type: string } = {id: 0, type: ""}

    constructor() {
        makeAutoObservable(this)
    }

    @action
    setSearchParams(searchParams: { id: number; type: string }) {
        this.searchParams = searchParams;
        this.setDistributions([])
        this.hasMore = true;
    }

    @action
    setDistributions(distributions: Distribution[]) {
        this.distributions = distributions;
    }

    @action
    async getCountDistributions() {
        this.isLoading = true;
        try {
            const response = await $api.get("/distributions/count")
            this.count = response.data;
            this.isLoading = false
        } catch (e) {
            console.log(e)
        }
    }

    @action
    getDistributions(page: number) {
        console.log(this.searchParams.type)
        $api.get("/distributions", {
            params: {
                page: page,
                limit: 10,
                by: this.searchParams.type,
                id: this.searchParams.id
            }
        }).then(res => {
            if (res.data.items.length === 0) {
                this.hasMore = false
            }
            this.distributions = [...this.distributions, ...res.data.items];
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
            this.isLoading = false
        })
    }

    @action
    getDistributionsAll() {
        $api.get("/distributions/all").then(res => {
            this.distributions = res.data;
        }).then(() => {
            this.isLoading = false
        }).catch(e => {
            console.log(e)
        })
    }


    @action
    sortBy(key: any, sortingDirection: boolean) {
        const sorted = [...this.distributions];

        if (sortingDirection) {
            sorted.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return 1;
                }
                return 0;
            });
        } else {
            sorted.sort((x1, x2) => {
                // @ts-ignore
                if (x1[key] > x2[key]) {
                    return -1;
                }
                // @ts-ignore
                if (x1[key] < x2[key]) {
                    return 1;
                }
                return 0;
            });
        }
        this.distributions = sorted;
    };

    @action
    sortByName() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.serviceman.fullName.localeCompare(x2.serviceman.fullName)) {
                return -1;
            }
            if (x2.serviceman.fullName.localeCompare(x1.serviceman.fullName)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByPosition() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.position.position.localeCompare(x2.position.position)) {
                return -1;
            }
            if (x2.position.position.localeCompare(x1.position.position)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByVoc() {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (x1.position.voc.localeCompare(x2.position.voc)) {
                return -1;
            }
            if (x2.position.voc.localeCompare(x1.position.voc)) {
                return 1;
            }
            return 0;
        });
        this.distributions = sorted;
    }

    @action
    sortByReleaseYear(sortingDirection: boolean) {
        const sorted = [...this.distributions];
        sorted.sort((x1, x2) => {
            if (!sortingDirection) {
                if (x1.releaseYear.releaseYear > x2.releaseYear.releaseYear) {
                    return -1;
                }
                if (x1.releaseYear.releaseYear < x2.releaseYear.releaseYear) {
                    return 1;
                }
                return 0;
            } else {
                if (x1.releaseYear.releaseYear < x2.releaseYear.releaseYear) {
                    return -1;
                }
                if (x1.releaseYear.releaseYear > x2.releaseYear.releaseYear) {
                    return 1;
                }
                return 0;
            }
        });
        this.distributions = sorted;
    }
}

const distributionStore = new DistributionStore()
export default distributionStore;