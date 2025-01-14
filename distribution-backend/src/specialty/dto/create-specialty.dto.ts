import {ApiProperty} from '@nestjs/swagger';

export class CreateSpecialtyDto {
    @ApiProperty()
    specialtyNumber: number;

    @ApiProperty()
    specialtyTitle: string;
}
