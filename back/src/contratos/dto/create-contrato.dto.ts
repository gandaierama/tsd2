import { ApiProperty } from '@nestjs/swagger';
export class CreateContratoDto {

  @ApiProperty({ required: true, default: "Cliente Teste" })
  cliente: string;

  @ApiProperty({ required: true, default: "XX133" })
  id_cliente: string;

  @ApiProperty({  required: true, default: "GG8877" })
  id_pacote: string;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ type: 'date', default: "2022-01-01" })
  start_date: Date;

  @ApiProperty({ type: 'date', default: "2022-01-30"})
  end_date: Date;




  @ApiProperty({ default: true })
  isActive: boolean;

}


