import { PartialType } from '@nestjs/swagger';
import { CreateValoreDto } from './create-valore.dto';

export class UpdateValoreDto extends PartialType(CreateValoreDto) {}
