import { ApiProperty } from '@nestjs/swagger';
export class CreateValorDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;



    @ApiProperty({ required: false, default: null })
      type: string
    @ApiProperty({ default: false })
    segunda: boolean;

    @ApiProperty({ default: '07:00' })
    ini_segunda: string;

    @ApiProperty({ default: '07:00' })
    fim_segunda: string;




    @ApiProperty({ default: true })
    terca: boolean;

    @ApiProperty({ default: '07:00' })
    ini_terca: string;

    @ApiProperty({ default: '07:00' })
    fim_terca: string;



    @ApiProperty({ default: true })
    quarta: boolean;

    @ApiProperty({ default: '07:00' })
    ini_quarta: string;

    @ApiProperty({ default: '07:00' })
    fim_quarta: string;




    @ApiProperty({ default: true })
    quinta: boolean;

    @ApiProperty({ default: '07:00' })
    ini_quinta: string;

    @ApiProperty({ default: '07:00' })
    fim_quinta: string;




    @ApiProperty({ default: true })
    sexta: boolean;

    @ApiProperty({ default: '07:00' })
    ini_sexta: string;

    @ApiProperty({ default: '07:00' })
    fim_sexta: string;


    @ApiProperty({ default: true })
    sabado: boolean;

    @ApiProperty({ default: '07:00' })
    ini_sabado: string;

    @ApiProperty({ default: '07:00' })
    fim_sabado: string;


    @ApiProperty({ default: true })
    domingo: boolean;  

    @ApiProperty({ default: '07:00' })
    ini_domingo: string;

    @ApiProperty({ default: '07:00' })
    fim_domingo: string;


    @ApiProperty({ default: '20.00' })
    diaria_periodo1: string;

    @ApiProperty({ default: '25.00' })
    diaria_periodo2: string;

    @ApiProperty({ default: '30.00' })
    diaria_periodo3: string;



    @ApiProperty({ default: '20.00' })
    entrega_periodo1: string;

    @ApiProperty({ default: '25.00' })
    entrega_periodo2: string;

    @ApiProperty({ default: '30.00' })
    entraga_periodo3: string;


    


  @ApiProperty({ default: true })
  isActive: boolean

}
