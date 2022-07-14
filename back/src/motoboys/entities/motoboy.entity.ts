import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export class Motoboy {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({length: 65, default: "Teste", nullable: false})
    name: string

    @Column({length: 65,unique:true, default: "ghost@texte.com", nullable: false})
    email: string
    @Column({length: 65, default: "", nullable: false})
    senha: string

    @Column({length: 65, default: "", nullable: true })
    telefone: string

    @Column({length: 65,  default: "", nullable: true })
    cpf: string

    @Column({length: 65,   default: "", nullable: true })
    cnpj: string

    @Column({length: 65, default: "", nullable: true})
    endereco: string

    @Column({length: 65, default: "", nullable: true })
    bairro: string

    @Column({length: 65, default: "", nullable: true })
    cidade: string

    @Column({length: 2, default: "", nullable: true })
    estado: string

    @Column({length: 65, default: "", nullable: true })
    numero: string

    @Column({length: 65, default: "", nullable: true })
    complemento: string

    @Column({length: 65, default: "", nullable: true })
    cep: string

    @Column({default: null})
    doc_cnpj: string;

    @Column({default: null})
    doc_contrato: string;

    @Column({default: null})
    doc_inscricao: string;

    @Column({default: null})
    doc_cpf: string;

    @Column({default: null})
    doc_rg: string;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
    
}
