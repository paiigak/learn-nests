import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsEmail,
  IsNumberString,
  IsUrl,
  isString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  // @IsNumberString()
  // phone: string;

  // @IsUrl()
  // url: string;
}

export class updateUserDto extends PartialType(CreateUserDto) {}
