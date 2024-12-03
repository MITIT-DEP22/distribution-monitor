import { Serviceman } from '../../serviceman/entities/serviceman.entity';
import { Position } from '../../position/entities/position.entity';
import { ReleaseYear } from '../../release-year/entities/release-year.entity';
import { MilitaryBase } from '../../military-base/entities/military-base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateDistributionDto {
  @ApiProperty()
  @IsNumber(
    {},
    { message: 'Військовослужбовець має бути числовим індетифікатором.' },
  )
  serviceMan: Serviceman;

  @ApiProperty()
  @IsNumber({}, { message: 'Посада має бути числовим індетифікатором.' })
  position: Position;

  @ApiProperty()
  @IsNumber({}, { message: 'Дата випуску має бути числовим індетифікатором.' })
  releaseYear: ReleaseYear;

  @ApiProperty()
  @IsNumber(
    {},
    { message: 'Військова база має бути числовим індетифікатором.' },
  )
  militaryBase: MilitaryBase;
}
