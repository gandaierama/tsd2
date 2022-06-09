import { ApiProperty } from '@nestjs/swagger';
export class CreateEntregaDto {

	@ApiProperty({ required: true, default: "Daniel" })
  name: string;


  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;


  @ApiProperty({ required: true, default: "yyyy" })
  pacote: string;

  @ApiProperty({ type: 'date' })
  inicio: Date;

  @ApiProperty({type: 'date' })
  fim: Date;


  @ApiProperty({ required: false, default: null })
  type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
