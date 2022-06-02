import { PartialType } from '@nestjs/swagger';
import { CreateValorDto } from './create-valore.dto';

export class UpdateValorDto extends PartialType(CreateValorDto) {}
