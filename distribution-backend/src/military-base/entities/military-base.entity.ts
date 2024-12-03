import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../region/entities/region.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'military_bases',
})
export class MilitaryBase {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @OneToOne(() => Region)
  @JoinColumn()
  region: Region;
}
