import { getConnection } from 'typeorm';
import { ItemCrossRef } from '../database/entities/itemCrossRef.entity';
import { ItemCrossRefRepository } from '../repository/itemCrossRef.repository';

export class ItemCrossRefService {
  private itemCrossRefRepository: ItemCrossRefRepository;

  constructor(){
    this.itemCrossRefRepository = getConnection("erp_api").getCustomRepository(ItemCrossRefRepository);
  }

  public index = async () => {
    const itemCrossRefs = await this.itemCrossRefRepository.find()
    return itemCrossRefs;
  } 

  public create = async (itemCrossRef: ItemCrossRef) => {
    const newItemCrossRef = await this.itemCrossRefRepository.save(itemCrossRef);
    return newItemCrossRef;
  } 

  public update =  async(itemCrossRef: ItemCrossRef, id: number) => {
    const updatedItemCrossRef = await this.itemCrossRefRepository.update(id, itemCrossRef);
    return updatedItemCrossRef;
  } 

  public delete = async (id: number) => {
    const deletedItemCrossRef = await this.itemCrossRefRepository.delete(id);
    return deletedItemCrossRef;
  } 
}