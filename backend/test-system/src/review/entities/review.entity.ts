import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm'

@Entity()
export class Review {
  @PrimaryColumn({ unique: true })
  name: string

  @Column()
  version: string

  @OneToOne(() => Review, review => review.name)
  review: Review
}
