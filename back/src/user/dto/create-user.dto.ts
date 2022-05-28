import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;

  	@ApiProperty({ required: false, default: "daniel@teste.com" })
  	email: string;

  	
    @ApiProperty({ required: false, default: "99999999999" })
    senha: string;

  	@ApiProperty({ required: false, default: "99999999999999" })
  	cnpj: string;

    @ApiProperty({ required: false, default: null })
      type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
