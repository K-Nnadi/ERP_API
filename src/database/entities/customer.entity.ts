import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./salesOrder.entity";

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    No: string;

    @Column()
    Name: string;

    //Constraints
  
    @OneToOne(() => SalesOrder, salesOrder => salesOrder.customer)
    salesOrder: SalesOrder
}