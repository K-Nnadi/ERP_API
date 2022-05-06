import { EntityRepository, Repository } from "typeorm";
import { Customer } from "../database/entities/customer.entity";
import { ShipToAddress } from "../database/entities/shipToOrder.entity";

@EntityRepository(ShipToAddress)
export class ShipToAddresssRepository extends Repository<ShipToAddress>{
    
}