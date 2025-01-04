import { Controller, Get, Query, Request, Post, Body } from '@nestjs/common';
import { log } from 'console';

@Controller('new')
export class NewController {
  @Get()
  saySome(@Query('dfj') query) {
    console.log(query);

    return 'hu'
  }
  @Post('post')
  upSome(@Body('id') body) {
    console.log(body)
    return 'post成功'
  }
}
