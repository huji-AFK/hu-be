import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewController } from './new/new.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TrialModule } from './trial/trial.module';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局模块
    }),
    TrialModule,
    // AuthModule,代码冲突
    // AuthModule,嗨嗨嗨
    // UsersModule,让我来改一改
  ],
  controllers: [AppController, NewController, UserController],
  providers: [AppService],
})
export class AppModule { }
