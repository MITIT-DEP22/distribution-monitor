import { PartialType } from '@nestjs/swagger';
import { CreateReleaseYearDto } from './create-release-year.dto';

export class UpdateReleaseYearDto extends PartialType(CreateReleaseYearDto) {}
