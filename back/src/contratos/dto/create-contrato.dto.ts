import { ApiProperty } from '@nestjs/swagger';
export class CreateContratoDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;



    @ApiProperty({ required: false, default: null })
      type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
