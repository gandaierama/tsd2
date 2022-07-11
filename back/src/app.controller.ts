import { Controller, Get, Request, Post, UseGuards, Body, Logger } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AppService } from './app.service';
import { LoginDto } from './login.dto';
import { Cron } from '@nestjs/schedule';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private appService: AppService,

    ) {}

    private readonly logger = new Logger("CRON");

  @Cron('* * 10 * * *')
  async handleCron() {
    this.logger.log("ACTION CRON");
  }

  
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }



  @Get('/contrato-page')
  contratoPage() {
    return this.appService.contratoPage();
  }
}