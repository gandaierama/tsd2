import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Orden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 65, default: "Teste", nullable: false})
    name: string;

    @Column({ default: 0, nullable: true })
    id_motoboy: number;

    @Column({ default: 0, nullable: true })
    id_cliente: number;

    @Column({ default: 0, nullable: true })
    id_contrato: number;

    @Column({ type: 'timestamp' , nullable: true}) // Recommended
    inicio: Date;

    @Column({ type: 'timestamp' , nullable: true}) // Recommended
    fim: Date;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
