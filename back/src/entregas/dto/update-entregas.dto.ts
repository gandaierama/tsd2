import { PartialType } from '@nestjs/swagger';
import { CreateEntregaDto } from './create-entregas.dto';

export class UpdateEntregaDto extends PartialType(CreateEntregaDto) {}
