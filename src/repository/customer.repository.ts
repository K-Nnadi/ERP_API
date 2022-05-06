import { EntityRepository, Repository } from "typeorm";
import { Customer } from "../database/entities/customer.entity";

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer>{
    
}