export type MilitaryBase ={
    id:number;
    name:string;
    region:Region;
}

export type Region = {
    id:number;
    city_type: string;
    city_name:string;
    name:string;
}

export type MilitaryBaseCreateDto ={
    id:number;
    name:string;
    region:RegionCreateDto;
}

export type RegionCreateDto = {
    city_type: string;
    city_name:string;
    name:string;
}