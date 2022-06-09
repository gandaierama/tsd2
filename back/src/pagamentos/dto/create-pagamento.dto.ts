import { ApiProperty } from '@nestjs/swagger';
export class CreatePagamentoDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;



    @ApiProperty({ required: false })
      type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
