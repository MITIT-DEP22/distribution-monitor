import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePositionDto {
  @ApiProperty()
  @IsString({ message: 'Назва посади має бути рядком.' })
  name: string;

  @ApiProperty()
  @IsString({ message: 'Військово облікова спеціальність має бути рядком.' })
  voc: string;
}
