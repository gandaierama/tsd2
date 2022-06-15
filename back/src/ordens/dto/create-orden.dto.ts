import { ApiProperty } from '@nestjs/swagger';
export class CreateOrdenDto {



  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;

  @ApiProperty({ required: true, default: "yyyy" })
  id_orden: string;

  @ApiProperty({ type: 'date', format: 'date'})
  inicio: Date;

  @ApiProperty({ type: 'date', format: 'date' })
  fim: Date;


  @ApiProperty({ default: true })
  isActive: boolean

}
