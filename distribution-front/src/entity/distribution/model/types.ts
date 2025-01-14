import {Serviceman, ServicemanCreateDto} from "../../serviceman/model/types";
import {Position, PositionCreateDto} from "../../position/model/types";
import {MilitaryBase, MilitaryBaseCreateDto} from "../../military-base/model/types";
import {ReleaseYear, ReleaseYearCreateDto} from "../../release-year/model/types";

export type Distribution = {
    id: number;
    serviceman: Serviceman;
    position: Position;
    releaseYear: ReleaseYear;
    militaryBase: MilitaryBase;
}

export type DistributionCreateDto = {
    serviceMan: ServicemanCreateDto;
    position: PositionCreateDto;
    releaseYear: ReleaseYearCreateDto;
    militaryBase: MilitaryBaseCreateDto;
}

