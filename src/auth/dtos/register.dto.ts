import { CreateUserDTO } from 'src/user/dtos';
import { PickType } from '@nestjs/mapped-types';

export class RegisterDTO extends PickType(CreateUserDTO, [
  'email',
  'fullName',
  'password',
  'role',
]) {}
