import { getConnection } from 'typeorm';
import { Customer } from '../database/entities/customer.entity';
import { CustomerRepository } from '../repository/customer.repository';

export class CustomerService {
  private customerRepository: CustomerRepository;

  constructor(){
    this.customerRepository = getConnection("erp_api").getCustomRepository(CustomerRepository);
  }

  public index = async () => {
    const customers = await this.customerRepository.find()
    return customers;
  } 

  public create = async (customer: Customer) => {
    const newOrder = await this.customerRepository.save(customer);
    return newOrder;
  } 

  public update =  async(customer: Customer, id: number) => {
    const updatedCustomer = await this.customerRepository.update(id, customer);
    return updatedCustomer;
  } 

  public delete = async (id: number) => {
    const deletedCustomer = await this.customerRepository.delete(id);
    return deletedCustomer;
  } 
}