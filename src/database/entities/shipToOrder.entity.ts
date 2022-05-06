import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./salesOrder.entity";

@Entity()
export class ShipToAddress {
    @PrimaryGeneratedColumn()
    Customer_No: string;

    @Column()
    Address1: string;

    @Column()
    Address2: string;

    
    @Column()
    townCity: string;

    @Column()
    postcode: string;

    //Constraints
  
    @OneToOne(() => SalesOrder, salesOrder => salesOrder.shipToAddress)
    salesOrder: SalesOrder

}