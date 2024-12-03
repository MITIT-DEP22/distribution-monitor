import { PartialType } from '@nestjs/swagger';
import { CreateMilitaryBaseDto } from './create-military-base.dto';

export class UpdateMilitaryBaseDto extends PartialType(CreateMilitaryBaseDto) {}
