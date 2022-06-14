import { ApiProperty } from '@nestjs/swagger';
export class LoginClienteDto {


  	@ApiProperty({ required: false, default: "daniel@teste.com" })
  	email: string;

    @ApiProperty({ required: false, default: "99999999999" })
    senha: string;

  	

}
