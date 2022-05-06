import { EntityRepository, Repository } from "typeorm";
import { ItemCrossRef } from "../database/entities/itemCrossRef.entity";

@EntityRepository(ItemCrossRef)
export class ItemCrossRefRepository extends Repository<ItemCrossRef>{
    
}