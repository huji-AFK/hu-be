import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('trial')
export class Trial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'trial_model', type: 'varchar', length: 255 })
  trialModel: string;

  @Column({ name: 'trial_brand', type: 'varchar', length: 255 })
  trialBrand: string;

  @Column({ name: 'trial_year', type: 'int', nullable: true })
  trialYear: number;

  @Column({ name: 'trial_price' })
  trialPrice: number;
}