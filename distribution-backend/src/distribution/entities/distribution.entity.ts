import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Serviceman } from '../../serviceman/entities/serviceman.entity';
import { Position } from '../../position/entities/position.entity';
import { ReleaseYear } from '../../release-year/entities/release-year.entity';
import { MilitaryBase } from '../../military-base/entities/military-base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Distribution {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @OneToOne(() => Serviceman)
  @JoinColumn()
  serviceman: Serviceman;

  @ApiProperty()
  @OneToOne(() => Position)
  @JoinColumn()
  position: Position;

  @ApiProperty()
  @OneToOne(() => ReleaseYear)
  @JoinColumn()
  releaseYear: ReleaseYear;

  @ApiProperty()
  @OneToOne(() => MilitaryBase)
  @JoinColumn()
  militaryBase: MilitaryBase;
}
