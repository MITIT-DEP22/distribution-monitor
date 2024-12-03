import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'regions',
})
export class Region {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  city_type: string;

  @ApiProperty()
  @Column()
  city_name: string;

  @ApiProperty()
  @Column()
  name: string;
}
