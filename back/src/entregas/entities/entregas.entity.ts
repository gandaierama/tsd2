import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Entrega {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: 0, nullable: true })
    id_orden: number;

    @Column({ default: 0, nullable: true })
    id_motoboy: number;

    @Column({ default: 0, nullable: true })
    id_cliente: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP()", nullable: true })
    inicio: Date;

    @Column({ type: 'timestamp', nullable: true }) 
    fim: Date;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
