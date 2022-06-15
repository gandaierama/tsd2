import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Entrega {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: '', nullable: true })
    id_orden: string;

    @Column({ default: '', nullable: true })
    id_motoboy: string;

    @Column({ default: '', nullable: true })
    id_cliente: string;

      @Column({default: "2022-01-01" })
      inicio: Date;

      @Column({ default: "2022-01-30"})
      fim: Date;


    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
