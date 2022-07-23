import { ApiProperty } from '@nestjs/swagger';
export class CreateMotoboyDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;

  @ApiProperty({ required: false, default: "daniel@teste.com" })
    email: string;

    @ApiProperty({ required: false, default: "99999999999" })
    cpf: string;

    @ApiProperty({ required: false, default: "99999999999" })
    senha: string;

    @ApiProperty({ required: false, default: "99999999999999" })
    cnpj: string;

    @ApiProperty({ required: false, default: "991254789645" })
    telefone: string;



    @ApiProperty({ required: false, default: null })
    banco: string

    @ApiProperty({ required: false, default: null })
    agencia: string

    @ApiProperty({ required: false, default: null })
    conta: string

    @ApiProperty({ required: false, default: null })
    chave_pix: string

    @ApiProperty({ required: false, default: null })
    cnh: string

    @ApiProperty({ required: false, default: null })
    rg: string

    @ApiProperty({ required: false, default: null })
    placa: string

    @ApiProperty({ required: false, default: null })
    valor_entrega: string

    @ApiProperty({ required: false, default: null })
    valor_diaria: string


    @ApiProperty({ required: false, default: null })
    endereco: string

    @ApiProperty({ required: false, default: null })
    complemento: string

    @ApiProperty({ required: false, default: null })
    cep: string

    @ApiProperty({ required: false, default: null })
    bairro: string

    @ApiProperty({ required: false, default: null })
    cidade: string

    @ApiProperty({ required: false, default: null })
    estado: string

    @ApiProperty({ required: false, default: null })
    numero: string

    @ApiProperty({ required: false, default: null })
      type: string

  @ApiProperty({ default: true })
  isActive: boolean

}
