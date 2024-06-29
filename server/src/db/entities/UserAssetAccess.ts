import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Domain } from './Domain';
import { User } from './User';

@Entity()
export class UserRoleInDomain extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @PrimaryColumn()
  domainId: number;

  @ManyToOne(() => Domain, { onDelete: 'CASCADE' })
  domain: Domain;

  @Column()
  assetType: string;

  @Column()
  assetId: number;

  @Column()
  access: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
