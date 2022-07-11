import { ApiProperty } from '@nestjs/swagger';
export class CreateOrdenDto {


  @ApiProperty({ required: true, default: "DDDDD" })
  cliente: string;

  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;

  @ApiProperty({ required: false, default: "yyyy" })
  id_pacote: string;

  @ApiProperty({ required: true, default: "yyyy" })
  id_orden: string;

  @ApiProperty({ type: 'date', default: "2022-01-01" })
  inicio: Date;

  @ApiProperty({ type: 'date', default: "2022-01-30"})
  fim: Date;


   @ApiProperty({ required: true, default: "0" })
    entregas: string;

    @ApiProperty({ required: true, default: "0" })
    motoboys: string;

    @ApiProperty({ required: true, default: "0" })
    periodo: string;

    @ApiProperty({ required: true, default: "0" })
    diaria: string;

    @ApiProperty({ required: true, default: "0" })
    total: string;




  @ApiProperty({ default: true })
  isActive: boolean

}
