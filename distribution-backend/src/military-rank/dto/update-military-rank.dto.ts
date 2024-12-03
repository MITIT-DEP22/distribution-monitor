import { PartialType } from '@nestjs/swagger';
import { CreateMilitaryRankDto } from './create-military-rank.dto';

export class UpdateMilitaryRankDto extends PartialType(CreateMilitaryRankDto) {}
