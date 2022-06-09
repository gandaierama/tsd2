import { ApiProperty } from '@nestjs/swagger';
export class CreateOrdenDto {

	@ApiProperty({ required: true, default: "Daniel" })
  name: string;


  @ApiProperty({ required: true, default: "1" })
  periodo: string;

  @ApiProperty({ required: true, default: "1" })
  entrega: string;

  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;

  @ApiProperty({ required: true, default: "yyyy" })
  pacote: string;

  @ApiProperty({ type: 'date', format: 'date'})
  inicio: Date;

  @ApiProperty({ type: 'date', format: 'date' })
  fim: Date;

  @ApiProperty({ required: false })
  type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
