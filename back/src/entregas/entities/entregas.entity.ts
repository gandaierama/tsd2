import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Entrega {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string

    @Column({ default: true, nullable: true })
    id_motoboy: number;

    @Column({ default: true, nullable: true })
    id_cliente: number;

    @Column({  type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)"  })
    start_date: Date;

    @Column({ default: truetype: "timestamp" })
    end_date: Date;

    @Column({  nullable: true })
    entrega: string;


    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
