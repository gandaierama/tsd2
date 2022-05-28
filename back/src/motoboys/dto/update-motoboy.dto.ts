import { PartialType } from '@nestjs/swagger';
import { CreateMotoboyDto } from './create-motoboy.dto';

export class UpdateMotoboyDto extends PartialType(CreateMotoboyDto) {}
