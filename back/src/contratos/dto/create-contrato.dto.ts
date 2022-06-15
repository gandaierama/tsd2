import { ApiProperty } from '@nestjs/swagger';
export class CreateContratoDto {


  @ApiProperty({ required: true, default: "XX133" })
  id_cliente: string;

  @ApiProperty({  required: true, default: "GG8877" })
  pacote: string;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ type: 'date', default: "2022-01-01" })
  inicio: Date;

  @ApiProperty({ type: 'date', default: "2022-01-30"})
  fim: Date;




  @ApiProperty({ default: true })
  isActive: boolean;

}
