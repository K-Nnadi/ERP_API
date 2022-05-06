import { getConnection } from 'typeorm';
import { SalesOrderLine } from '../database/entities/salesOrderLine.entity';
import { SalesOrderLineRepository } from '../repository/salesOrderLine.repository';

export class SalesOrderLineService {
  private salesOrderLineRepository: SalesOrderLineRepository;

  constructor(){
    this.salesOrderLineRepository = getConnection("erp_api").getCustomRepository(SalesOrderLineRepository);
  }

  public index = async () => {
    const salesOrderLines = await this.salesOrderLineRepository.find()
    return salesOrderLines;
  } 

  public create = async (salesOrderLine: SalesOrderLine) => {
    const newSalesOrderLine = await this.salesOrderLineRepository.save(salesOrderLine);
    return newSalesOrderLine;
  } 

  public update =  async(salesOrderLine: SalesOrderLine, id: number) => {
    const updatedSalesOrderLine = await this.salesOrderLineRepository.update(id, salesOrderLine);
    return updatedSalesOrderLine;
  } 

  public delete = async (id: number) => {
    const deletedSalesOrderLine = await this.salesOrderLineRepository.delete(id);
    return deletedSalesOrderLine;
  } 
}