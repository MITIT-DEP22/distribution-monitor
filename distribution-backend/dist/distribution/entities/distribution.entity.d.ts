import { Serviceman } from '../../serviceman/entities/serviceman.entity';
import { Position } from '../../position/entities/position.entity';
import { ReleaseYear } from '../../release-year/entities/release-year.entity';
import { MilitaryBase } from '../../military-base/entities/military-base.entity';
export declare class Distribution {
    id: number;
    serviceman: Serviceman;
    position: Position;
    releaseYear: ReleaseYear;
    militaryBase: MilitaryBase;
}
