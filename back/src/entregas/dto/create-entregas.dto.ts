import { ApiProperty } from '@nestjs/swagger';
export class CreateEntregaDto {



  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;


  @ApiProperty({ required: true, default: "yyyy" })
  id_orden: string;

    @ApiProperty({ type: 'date', default: "2022-01-01" })
  inicio: Date;

  @ApiProperty({ type: 'date', default: "2022-01-30"})
  fim: Date;



  @ApiProperty({ default: true })
  isActive: boolean

}
