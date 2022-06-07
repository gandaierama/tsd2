import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Valor {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string


    @Column({ default: false })
    segunda: boolean;

    @Column({ default: '07:00' })
    ini_segunda: string;

    @Column({ default: '07:00' })
    fim_segunda: string;




    @Column({ default: true })
    terca: boolean;

    @Column({ default: '07:00' })
    ini_terca: string;

    @Column({ default: '07:00' })
    fim_terca: string;



    @Column({ default: true })
    quarta: boolean;

    @Column({ default: '07:00' })
    ini_quarta: string;

    @Column({ default: '07:00' })
    fim_quarta: string;




    @Column({ default: true })
    quinta: boolean;

    @Column({ default: '07:00' })
    ini_quinta: string;

    @Column({ default: '07:00' })
    fim_quinta: string;




    @Column({ default: true })
    sexta: boolean;

    @Column({ default: '07:00' })
    ini_sexta: string;

    @Column({ default: '07:00' })
    fim_sexta: string;


    @Column({ default: true })
    sabado: boolean;

    @Column({ default: '07:00' })
    ini_sabado: string;

    @Column({ default: '07:00' })
    fim_sabado: string;


    @Column({ default: true })
    domingo: boolean;  

    @Column({ default: '07:00' })
    ini_domingo: string;

    @Column({ default: '07:00' })
    fim_domingo: string;




    @Column({ default: '20.00' })
    diaria_periodo1: string;

    @Column({ default: '25.00' })
    diaria_periodo2: string;

    @Column({ default: '30.00' })
    diaria_periodo3: string;



    @Column({ default: '20.00' })
    entrega_periodo1: string;

    @Column({ default: '25.00' })
    entrega_periodo2: string;

    @Column({ default: '30.00' })
    entraga_periodo3: string;


    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
