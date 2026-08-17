//append_imports_start

import {
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Column,
  Check,
} from 'typeorm'; //_splitter_
//append_imports_end
@Entity('proposals')
@Check('char_length("proposal_id")<=40')
@Check('char_length("proposal_id")>=1')
@Check('char_length("plan_code")<=20')
@Check('char_length("plan_code")>=1')
export class proposals {
  @PrimaryColumn({ name: 'proposal_id' })
  proposal_id: string;
  @Column({
    name: 'plan_code',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  plan_code: string;
  @Column({
    name: 'sum_insured',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  sum_insured: number;
  @Column({
    name: 'mobile_no',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  mobile_no: string;
  @Column({ name: 'email', nullable: false, type: 'varchar', primary: false })
  email: string;
  @Column({
    name: 'rating_age',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  rating_age: number;
  @Column({
    name: 'age_band',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  age_band: string;
  @Column({
    name: 'spouse_included',
    nullable: false,
    type: 'boolean',
    primary: false,
  })
  spouse_included: boolean;
  @Column({
    name: 'base_premium',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  base_premium: number;
  @Column({
    name: 'loaded_premium',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  loaded_premium: number;
  @Column({
    name: 'gst_amount',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  gst_amount: number;
  @Column({
    name: 'final_premium',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  final_premium: number;
  @Column({
    name: 'additional_loading_pct',
    nullable: false,
    type: 'numeric',
    primary: false,
  })
  additional_loading_pct: number;
  @Column({
    name: 'rating_trace',
    nullable: false,
    type: 'text',
    primary: false,
  })
  rating_trace: string;
  @Column({ name: 'mu_remarks', nullable: false, type: 'text', primary: false })
  mu_remarks: string;
  @Column({
    name: 'manager_remarks',
    nullable: false,
    type: 'text',
    primary: false,
  })
  manager_remarks: string;
  @Column({
    name: 'policy_no',
    nullable: false,
    type: 'varchar',
    primary: false,
  })
  policy_no: string;
  @Column({ name: 'status', nullable: false, type: 'varchar', primary: false })
  status: string;
  @CreateDateColumn({
    name: 'created_at',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  created_at: Date;
  @UpdateDateColumn({
    name: 'updated_at',
    nullable: false,
    type: 'timestamp with time zone',
    primary: false,
  })
  updated_at: Date;
}
