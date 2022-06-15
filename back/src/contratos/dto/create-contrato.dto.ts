import { ApiProperty } from '@nestjs/swagger';
export class CreateContratoDto {


  @ApiProperty({ required: true, default: "XX133" })
  id_cliente: string;

  @ApiProperty({  required: true, default: "GG8877" })
  pacote: string;

  @ApiProperty({ required: false })
  type: string;

  @ApiProperty({ type: 'date' })
  inicio: Date;

  @ApiProperty({ type: 'date'})
  fim: Date;




  @ApiProperty({ default: true })
  isActive: boolean;

}
