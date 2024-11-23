import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Marks this class as a database entity
export class User {
  @PrimaryGeneratedColumn() // Primary key with auto-increment
  id: number;

  @Column() // Regular column
  name: string;

  @Column({ unique: true }) // Column with a unique constraint
  email: string;

  @Column()
  password: string;
}
