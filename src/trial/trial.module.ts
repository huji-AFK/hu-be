import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrialController } from './trial.controller';
import { TrialService } from './trial.service';
import { Trial } from './trial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trial])],
  controllers: [TrialController],
  providers: [TrialService]
})
export class TrialModule { }
// src/car/car.module.ts
// import { Module } from '@nestjs/common';
// import { CarController } from './car.controller';
// // import { CarService } from './car.service';
// import { Car } from './car.entity';

// @Module({
//   controllers: [CarController],
//   providers: [CarService],
// })
// export class CarModule {}
