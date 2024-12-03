import { PartialType } from '@nestjs/swagger';
import { CreateServicemanDto } from './create-serviceman.dto';

export class UpdateServicemanDto extends PartialType(CreateServicemanDto) {}
