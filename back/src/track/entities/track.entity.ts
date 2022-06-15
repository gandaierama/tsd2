import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Track {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: 0, nullable: true })
    id_motoboy: string;

    @Column({ default: 0, nullable: true })
    id_cliente: string;

    @Column({ default: 0, nullable: true })
    id_entrega: string;

    @Column({ type: 'string' , nullable: true})
    latitude: string;

    @Column({ type: 'string' , nullable: true})
    longitude: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
