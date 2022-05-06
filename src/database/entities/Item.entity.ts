import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item{
    @PrimaryGeneratedColumn()
    No: string;

    @Column()
    Name: string;

    @Column()
    Description: string;

    @Column()
    Inventory: number;

    @Column()
    unitCost: number;

    @Column()
    unitPrice: number;
}