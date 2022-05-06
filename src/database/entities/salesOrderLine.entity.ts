import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrder } from "./salesOrder.entity";

@Entity()
export class SalesOrderLine {
    @PrimaryGeneratedColumn()
    No: string;

    @Column()
    salesOrderNo: string;

    @Column()
    Quality: number;
 
    @Column()
    unitPrice: string;

    @Column()
    Type: string = 'item';
    

    //Constraints
    @ManyToOne(() => SalesOrder)
    salesOrder: SalesOrder

}