import { EntityRepository, Repository } from "typeorm";
import { SalesOrder } from "../database/entities/salesOrder.entity";

@EntityRepository(SalesOrder)
export class SalesOrderRepository extends Repository<SalesOrder>{
    
}