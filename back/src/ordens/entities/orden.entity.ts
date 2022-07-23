import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Orden {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ default: '',nullable: true })
    id_motoboy: string;

    @Column({ default: '', nullable: true })
    cliente: string;

    @Column({ default: '', nullable: true })
    cep: string;

    @Column({ default: '', nullable: true })
    bairro: string;

    @Column({ default: '', nullable: true })
    latitude: string;

    @Column({ default: '', nullable: true })
    longitude: string;

    @Column({ default: '', nullable: true })
    id_cliente: string;

    @Column({ default: '', nullable: true })
    id_contrato: string;
    @Column({ default: '', nullable: true })
    id_pacote: string;

    @Column({ default: '', nullable: true })
    entregas: string;

    @Column({ default: '', nullable: true })
    motoboys: string;

    @Column({ default: '[]', nullable: true })
    motoboys_ids: string;

    @Column({ default: '', nullable: true })
    periodo: string;

    @Column({ default: '', nullable: true })
    diaria: string;

    @Column({ default: '', nullable: true })
    total: string;

    @Column({ default: '', nullable: true })
    start: string;
    @Column({ default: '', nullable: true })
    end: string;

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
