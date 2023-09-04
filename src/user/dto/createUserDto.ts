import { IsString, IsEmail, IsNumberString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  phone: string;

  // @IsUrl()
  // url: string;
}
