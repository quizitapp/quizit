import { Entity, Column } from 'typeorm';
import { DBEntity } from './Entity';

@Entity()
export class Domain extends DBEntity {
  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
