//append_imports_start

import { PrimaryColumn, Entity, Column, Check } from 'typeorm'; //_splitter_
//append_imports_end
@Entity('proposal_members')
@Check('char_length("member_id")<=36')
export class proposal_members {
  @PrimaryColumn({ name: 'member_id' })
  member_id: string;
  @Column({
    name: 'proposal_id',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  proposal_id: string;
  @Column({
    name: 'relation',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  relation: string;
  @Column({
    name: 'full_name',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  full_name: string;
  @Column({ name: 'dob', nullable: false, type: 'date', primary: false })
  dob: Date;
  @Column({ name: 'age', nullable: false, type: 'numeric', primary: false })
  age: number;
  @Column({
    name: 'height_cm',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  height_cm: number;
  @Column({
    name: 'weight_kg',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  weight_kg: number;
  @Column({ name: 'bmi', nullable: false, type: 'numeric', primary: false })
  bmi: number;
  @Column({
    name: 'tobacco_use',
    nullable: false,
    type: 'boolean',
    primary: false,
  })
  tobacco_use: boolean;
  @Column({
    name: 'diabetes_declared',
    nullable: false,
    type: 'boolean',
    primary: false,
  })
  diabetes_declared: boolean;
  @Column({
    name: 'hypertension_declared',
    nullable: false,
    type: 'boolean',
    primary: false,
  })
  hypertension_declared: boolean;
}
