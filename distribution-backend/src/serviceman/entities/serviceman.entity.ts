import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MilitaryRank } from '../../military-rank/entities/military-rank.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Serviceman {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  fullName: string;

  @ApiProperty()
  @OneToOne(() => MilitaryRank)
  @JoinColumn()
  rank: MilitaryRank;

  @ApiProperty()
  @Column()
  birthYear: number;

  @ApiProperty()
  @Column()
  sex: string;

  @ApiProperty()
  @Column()
  specialty: string;
}
