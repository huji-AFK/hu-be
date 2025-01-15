import { Controller, Get, Post, Body, Response } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()

  index() {
  }

  @Post('todo')
  todo(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/user');

  }
}
