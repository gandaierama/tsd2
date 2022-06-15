import { ApiProperty } from '@nestjs/swagger';
export class CreateTrackDto {


  @ApiProperty({ required: true, default: "DDDDD" })
  id_cliente: string;

  @ApiProperty({ required: false, default: "XXXX" })
  id_motoboy: string;

  @ApiProperty({ required: true, default: "yyyy" })
  id_entrega: string;


  @ApiProperty({ required: false })
  latitude: string

  @ApiProperty({ required: false })
  longitude: string



}
