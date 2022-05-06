import { EntityRepository, Repository } from "typeorm";
import { SalesOrderLine } from "../database/entities/salesOrderLine.entity";

@EntityRepository(SalesOrderLine)
export class SalesOrderLineRepository extends Repository<SalesOrderLine>{
    
}