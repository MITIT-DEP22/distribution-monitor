import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateReleaseYearDto {
  @ApiProperty()
  @IsNumber({}, { message: 'Дата випуску має бути числом.' })
  releaseYear: number;
}
