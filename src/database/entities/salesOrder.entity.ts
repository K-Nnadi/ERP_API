import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShipToAddress } from "./shipToOrder.entity";
import { Customer } from "./customer.entity";
import { SalesOrderLine } from "./salesOrderLine.entity";

@Entity()
export class SalesOrder {
    @PrimaryGeneratedColumn()
    No: string;

    @Column()
    Lines: SalesOrderLine[];

    @Column()
    Amount: number;

    
    @Column()
    Customer: Customer;

    @Column()
    Ship_To_Address: ShipToAddress;

    //Constraints
  

    @OneToMany(() => SalesOrderLine, salesOrderLine => salesOrderLine.salesOrder)
    salesOrderLine:SalesOrderLine[]

    @OneToOne(() => Customer, customer => customer.salesOrder)
    customer: Customer

    @OneToOne(() => ShipToAddress, shipToAddress => shipToAddress.salesOrder)
    shipToAddress: ShipToAddress
  
    

}