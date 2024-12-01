import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ACCOUNT_TYPE } from "../enums/account_type.type";
import { HOLDER_TYPE } from "../enums/holder_type.type";

@Entity()
export class BankAccount
{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    identification: string;

    @Column({ nullable: true })
    balance: number;
  
    @Column({ type: 'enum', enum: ACCOUNT_TYPE, nullable: true })
    account_type: ACCOUNT_TYPE;
    
    @Column({ type: 'enum', enum: HOLDER_TYPE, nullable: true })
    holder_type: HOLDER_TYPE;
  
    @Column({ nullable: true })
    description: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}