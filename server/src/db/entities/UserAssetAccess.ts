import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Domain } from './Domain';
import { User } from './User';
import { DBEntity } from './Entity';

@Entity()
export class UserRoleInDomain extends DBEntity {
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
}
