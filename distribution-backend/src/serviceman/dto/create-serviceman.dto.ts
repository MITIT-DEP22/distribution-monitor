import { MilitaryRank } from '../../military-rank/entities/military-rank.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length, Max, Min } from 'class-validator';

export class CreateServicemanDto {
  @ApiProperty()
  @IsString({ message: "Ім'я має бути рядком." })
  @Length(5, 100, {
    message: "Повне ім'я має бути довжиною від 5 до 100 символів",
  })
  fullName: string;

  @ApiProperty()
  @IsNumber(
    {},
    { message: 'Військове звання має бути числовим індетифікатором.' },
  )
  rank: MilitaryRank;

  @ApiProperty()
  @IsNumber({}, { message: 'День народження має бути числом.' })
  @Min(1900, { message: 'Рік народження має бути не менше 1900.' })
  @Max(new Date().getFullYear(), {
    message: 'Нажаль ви не могли народитися в майбутньому.',
  })
  birthYear: number;

  @ApiProperty()
  @IsString({ message: 'Стать має бути рядком.' })
  @Length(1, 1, { message: 'Стать має бути довжиною 1-го символу' })
  sex: string;

  @ApiProperty()
  @IsString({ message: 'Спецільність не має бути пустою.' })
  @Length(3, 3, { message: 'Спецільність має бути довжиною 3-ох символу' })
  specialty: string;
}
