import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm'

@Entity()
export class Library {
  @PrimaryColumn({ unique: true })
  name: string

  @Column()
  version: string

  @OneToOne(() => Library, library => library.name)
  library: Library
}
