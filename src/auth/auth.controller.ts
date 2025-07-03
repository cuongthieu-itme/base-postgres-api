import { Body, Controller, Get, Patch, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ForgetPasswordDTO,
  LoginDTO,
  RegisterDTO,
  VerifyAccountDTO,
} from './dtos';
import { AuthGuard } from 'src/common/decorators/auth-guard.decorator';
import { AuthRequest } from 'src/common/types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDTO) {
    return this.authService.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDTO) {
    return this.authService.register(dto);
  }

  @Patch('forget-password')
  forgetPassword(@Body() dto: ForgetPasswordDTO) {
    return this.authService.forgetPassword(dto);
  }

  @Patch('verify-account')
  verifyAccount(@Body() dto: VerifyAccountDTO) {
    return this.authService.verifyAccount(dto);
  }

  @Get('me')
  @AuthGuard()
  getMe(@Request() req: AuthRequest) {
    return this.authService.getMe(req.user.id);
  }
}
