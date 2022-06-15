import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginMotoboyDto } from './dto/login-motoboy.dto';
import { CreateMotoboyDto } from './dto/create-motoboy.dto';
import { UpdateMotoboyDto } from './dto/update-motoboy.dto';
import { Motoboy } from './entities/motoboy.entity';


@Injectable()
export class MotoboyService {
  constructor(
    @InjectRepository(Motoboy)
    private motoboyRepository: Repository<Motoboy>,
  ) {}


  private readonly logger = new Logger(ClienteService.name);
  private readonly loggerC = new Logger("CRON");

  async login(loginMotoboyDto: LoginMotoboyDto){

      console.log("DTO", loginMotoboyDto.senha);
      this.logger.log(loginMotoboyDto.senha);
      const email = loginMotoboyDto.email;
      const senha = loginMotoboyDto.senha;
      const user = await this.motoboyRepository.find({ where: { email } });
      console.log("USER", user);
      if(user!==null){
          console.log("USER", user[0].senha);
          return user;

          if (senha===user.senha) {
            return user;
          } 

          return false;
        
      }
      return null;
 
  }
  

  create(createMotoboyDto: CreateMotoboyDto): Promise<Motoboy> {
    const obje = new Motoboy();
    obje.name = createMotoboyDto.name;

    obje.email = createMotoboyDto.email;
    obje.telefone = createMotoboyDto.telefone;
    obje.senha = createMotoboyDto.senha;
    obje.cpf = createMotoboyDto.cpf;
    obje.cnpj = createMotoboyDto.cnpj;
    
    return this.motoboyRepository.save(obje);
  }

  update(id: string, updateOrdemDto: UpdateMotoboyDto) {
    return `This action updates a #${id} ordem`;
  }

  findAll(): Promise<Motoboy[]> {
    return this.motoboyRepository.find();
  }

  findOne(id: string): Promise<Motoboy> {
    return this.motoboyRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.motoboyRepository.delete(id);
  }
}
