import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Contrato {
    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column({ nullable: false })
    id_cliente: string;

    @Column({  nullable: false })
    pacote: string;

    @Column({ default: true })
    isActive: boolean;

          @Column({default: "2022-01-01" })
      inicio: Date;

      @Column({ default: "2022-01-30"})
      fim: Date;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
