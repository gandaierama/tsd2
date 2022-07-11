import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Valor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string

    @Column({ default: null, nullable: true })
    status: string;

    @Column({ default: null, nullable: true })
    segunda: string;

    @Column({ default: null, nullable: true })
    terca: string;

    @Column({ default: null, nullable: true })
    quarta: string;


    @Column({ default: null, nullable: true })
    quinta: string;

    @Column({ default: null, nullable: true })
    sexta: string;

    @Column({ default: null, nullable: true })
    sabado: string;
    @Column({ default: null, nullable: true })
    domingo: string;




    @Column({ default: '20.00' })
    diaria1: string;

    @Column({ default: '20.00' })
    diaria2: string;

    @Column({ default: '20.00' })
    diaria3: string;


    @Column({ default: '25.00' })
    entrega1: string;

    @Column({ default: '25.00' })
    entrega2: string;

    @Column({ default: '25.00' })
    entrega3: string;



    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
