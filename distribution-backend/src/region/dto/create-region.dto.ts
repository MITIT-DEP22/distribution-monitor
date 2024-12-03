import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  @Length(1, 15, {
    message: 'Тип міста має бути довжиною від 1 до 15 символів',
  })
  city_type: string;

  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  @Length(3, 50, {
    message: 'Назва міста має бути довжиною від 3 до 50 символів',
  })
  city_name: string;

  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  @Length(3, 50, {
    message: 'Назва регіону має бути від 3 до 50 символів',
  })
  name: string;
}
