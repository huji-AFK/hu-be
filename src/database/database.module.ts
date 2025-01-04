//数据库连接

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule, // 添加 ConfigModule
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // 引入 ConfigModule
      inject: [ConfigService], // 注入 ConfigService
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get<string>('DB_HOST'))
        return {
          type: configService.get<string>('DB_TYPE') as 'mysql', // 获取环境变量
          driver: require('mysql2'),  // 使用 mysql2 驱动
          host: configService.get<string>('DB_HOST'),
          port: parseInt(configService.get<string>('DB_PORT'), 3),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_DATABASE'),
          timezone: configService.get<string>('DB_TIMEZONE'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        }
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule { }
