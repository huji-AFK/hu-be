import { Controller, Get, Post, Body, Response, Render } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  @Render('default/user.ejs')
  index() {
  }

  @Post('todo')
  todo(@Body() body, @Response() res) {
    console.log(body);
    res.redirect('/user');

  }
}
