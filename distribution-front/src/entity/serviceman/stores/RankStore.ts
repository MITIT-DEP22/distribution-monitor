import {action, makeAutoObservable} from "mobx";
import {Rank} from "../model/types";
import $api from "../../../shared/api";
import {SelectOption} from "../../../feature/CustomSelect/types/types";

class RankStore {

    ranks: Rank[] = []
    loading: boolean = true;

    constructor() {
        makeAutoObservable(this)
    }

    @action
    async fetchRanks() {
        try {
            this.loading = true;
            const response = await $api.get("/military-ranks");
            this.ranks = response.data;
        } catch (e) {
            console.log(e)
        } finally {
            this.loading = false;
        }

    }

    @action
    mapForSelectComponent() {
        let result: SelectOption[] = []
        this.ranks.forEach(rank => {
            result.push({label: rank.militaryRank, value: rank.id});
        })
        return result
    }
}

const rankStore = new RankStore()
export default rankStore