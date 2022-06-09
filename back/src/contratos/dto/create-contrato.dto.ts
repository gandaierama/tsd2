import { ApiProperty } from '@nestjs/swagger';
export class CreateContratoDto {

	@ApiProperty({ required: true, default: "Daniel" })
  name: string;

  @ApiProperty({ required: true, default: "XX133" })
  id_cliente: string;

  @ApiProperty({  required: true, default: "GG8877" })
  pacote: string;

  @ApiProperty({ required: false, default: null })
  type: string;

  @ApiProperty({ type: 'timestamp', format: 'date' })
  inicio: Date;

  @ApiProperty({ type: 'timestamp', format: 'date'})
  fim: Date;




  @ApiProperty({ default: true })
  isActive: boolean;

}
