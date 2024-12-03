import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMilitaryRankDto {
  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  militaryRank: string;
}
