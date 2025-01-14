import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('specialty')
export class Specialty {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ unique: true })
    specialtyNumber: number;

    @ApiProperty()
    @Column()
    specialtyTitle: string;
}
