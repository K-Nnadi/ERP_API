import { getConnection } from 'typeorm';
import { SalesOrder } from '../database/entities/salesOrder.entity';
import { SalesOrderRepository } from '../repository/salesOrder.repository';

export class SalesOrderService {
  private salesOrderRepository: SalesOrderRepository;

  constructor(){
    this.salesOrderRepository = getConnection("erp_api").getCustomRepository(SalesOrderRepository);
  }

  public index = async () => {
    const salesOrders = await this.salesOrderRepository.find()
    return salesOrders;
  } 

  public create = async (salesOrder: SalesOrder) => {
    const newSalesOrder = await this.salesOrderRepository.save(salesOrder);
    return newSalesOrder;
  } 

  public update =  async(salesOrder: SalesOrder, id: number) => {
    const updatedSalesOrder = await this.salesOrderRepository.update(id, salesOrder);
    return updatedSalesOrder;
  } 

  public delete = async (id: number) => {
    const deletedSalesOrder = await this.salesOrderRepository.delete(id);
    return deletedSalesOrder;
  } 
}