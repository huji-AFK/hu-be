import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewController } from './new/new.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { TrialModule } from './trial/trial.module';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局模块
    }),
    TrialModule,
    // AuthModule,
    // UsersModule,让我来改一改
  ],
  controllers: [AppController, NewController],
  providers: [AppService],
})
export class AppModule { }
