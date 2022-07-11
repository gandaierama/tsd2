import { ApiProperty } from '@nestjs/swagger';
export class CreateValorDto {

	@ApiProperty({ required: true, default: "Daniel" })
  	name: string;


    @ApiProperty({ required: false, default: null })
      status: string
    @ApiProperty({ required: false, default: null })
      type: string
    @ApiProperty({ default: null })
    segunda: string;




    @ApiProperty({ default: null })
    terca: string;

 



    @ApiProperty({ default: null })
    quarta: string;





    @ApiProperty({ default: null })
    quinta: string;





    @ApiProperty({ default: null })
    sexta: string;



    @ApiProperty({ default: null })
    sabado: string;



    @ApiProperty({ default: null })
    domingo: string;  




    @ApiProperty({ default: '20.00' })
    diaria1: string;

    @ApiProperty({ default: '25.00' })
    diaria2: string;

    @ApiProperty({ default: '30.00' })
    diaria3: string;



    @ApiProperty({ default: '20.00' })
    entrega1: string;

    @ApiProperty({ default: '25.00' })
    entrega2: string;

    @ApiProperty({ default: '30.00' })
    entrega3: string;


    


  @ApiProperty({ default: true })
  isActive: boolean

}
