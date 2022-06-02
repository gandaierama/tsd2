import { ApiProperty } from '@nestjs/swagger';
export class CreateBloqueioDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;



    @ApiProperty({ required: false, default: null })
      type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
