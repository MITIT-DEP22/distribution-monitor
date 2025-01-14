import { MilitaryRank } from '../../military-rank/entities/military-rank.entity';
export declare class CreateServicemanDto {
    fullName: string;
    rank: MilitaryRank;
    birthYear: number;
    sex: string;
    specialty: string;
}
