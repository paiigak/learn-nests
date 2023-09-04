import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  findAll(@Param('id') id: string) {
    return {
      user: {
        id: id,
      },
    };
  }
}
