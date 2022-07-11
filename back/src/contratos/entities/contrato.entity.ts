import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Contrato {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
    cliente: string;

    @Column({ nullable: true })
    id_cliente: string;

    @Column({  nullable: true })
    id_pacote: string;

    @Column({  nullable: true, default: true })
    type: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({nullable: true, default: "2022-01-01" })
    start_date: Date;

    @Column({ nullable: true, default: "2022-01-30"})
    end_date: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}


