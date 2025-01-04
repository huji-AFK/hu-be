// src/trial/create-trail.dto.ts
import { IsString, IsInt, IsOptional, IsNumber, MaxLength, IsNotEmpty } from 'class-validator';

export class CreateTrialDto {

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  trialModel: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  trialBrand: string;

  @IsInt()
  @IsOptional()  // 允许该字段为空
  trialYear?: number;

  @IsNumber()
  @IsNotEmpty()
  trialPrice: number;
}
