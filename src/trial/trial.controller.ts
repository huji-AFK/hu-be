// src/trial/trial.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TrialService } from './trial.service';
import { Trial } from './trial.entity';
import { CreateTrialDto } from './create-trial.dto';

@Controller('trial')
export class TrialController {
  constructor(private readonly trialService: TrialService) { }

  // 创建新车
  @Post()
  async create(@Body() createTrialDto: CreateTrialDto) {
    return this.trialService.create(createTrialDto);
  }

  // 获取所有汽车
  @Get()
  async findAll(): Promise<Trial[]> {
    return this.trialService.findAll();
  }

  // 获取特定ID的汽车
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Trial> {
    return this.trialService.findOne(id);
  }

  // 更新汽车信息
  @Put(':id')
  async update(@Param('id') id: number, @Body() trial: Partial<Trial>): Promise<Trial> {
    return this.trialService.update(id, trial);
  }

  // 删除汽车
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.trialService.remove(id);
  }
}
