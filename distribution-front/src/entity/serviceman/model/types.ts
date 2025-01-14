export type Serviceman = {
    id: number;
    fullName:string;
    rank:Rank;
    birthdayYear:number;
    sex:string;
    specialty:string;
}

export type Rank = {
    id:number;
    militaryRank:string;
}

export type ServicemanCreateDto = {
    fullName:string;
    rankId:number;
    birthdayYear:number;
    sex:string;
    specialty:string;
}
