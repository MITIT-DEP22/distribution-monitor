import { Region } from '../../region/entities/region.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length } from 'class-validator';

export class CreateMilitaryBaseDto {
  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  @Length(2, 20, {
    message: 'Назва військової бази має бути довжиною від 5 до 100 символів',
  })
  name: string;

  @ApiProperty()
  @IsNumber({}, { message: 'Регіон має бути числовим індетифікатором.' })
  region: Region;
}
