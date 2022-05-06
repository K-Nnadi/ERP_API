import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemCrossRef{
    @PrimaryGeneratedColumn()
    itemNo: string;

    @Column()
    referenceNo: string;

}