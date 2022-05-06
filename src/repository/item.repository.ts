import { EntityRepository, Repository } from "typeorm";
import { Item } from "../database/entities/Item.entity";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item>{
    
}