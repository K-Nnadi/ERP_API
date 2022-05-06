import { getConnection } from 'typeorm';
import { Item } from '../database/entities/Item.entity';
import { ItemRepository } from '../repository/item.repository';

export class ItemService {
  private itemRepository: ItemRepository;

  constructor(){
    this.itemRepository = getConnection("erp_api").getCustomRepository(ItemRepository);
  }

  public index = async () => {
    const items = await this.itemRepository.find()
    return items;
  } 

  public create = async (item: Item) => {
    const newPost = await this.itemRepository.save(item);
    return newPost;
  } 

  public update =  async(item: Item, id: number) => {
    const updatedItem = await this.itemRepository.update(id, item);
    return updatedItem;
  } 

  public delete = async (id: number) => {
    const deletedItem = await this.itemRepository.delete(id);
    return deletedItem;
  } 
}