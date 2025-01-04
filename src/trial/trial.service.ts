// src/trial/trial.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trial } from './trial.entity';
import { CreateTrialDto } from './create-trial.dto';

@Injectable()
export class TrialService {
  constructor(
    @InjectRepository(Trial)
    private trialRepository: Repository<Trial>,
  ) { }

  async create(createTrialDto: CreateTrialDto): Promise<Trial> {
    const newTrial = this.trialRepository.create(createTrialDto);
    return this.trialRepository.save(newTrial);
  }

  async findAll(): Promise<Trial[]> {
    return this.trialRepository.find();
  }

  async findOne(id: number): Promise<Trial> {
    return this.trialRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.trialRepository.delete(id);
  }
  async update(id: number, trial: Partial<Trial>): Promise<Trial> {
    await this.trialRepository.update(id, trial);
    return this.trialRepository.findOneBy({ id });
  }

}
