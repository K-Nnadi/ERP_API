import { getConnection } from 'typeorm';
import { ShipToAddress } from '../database/entities/shipToOrder.entity';
import { ShipToAddresssRepository } from '../repository/shipToAddress.repository';

export class ShipToAddressService {
  private shipToAddressRepository: ShipToAddresssRepository;

  constructor(){
    this.shipToAddressRepository = getConnection("erp_api").getCustomRepository(ShipToAddresssRepository);
  }

  public index = async () => {
    const shippingAddresses = await this.shipToAddressRepository.find()
    return shippingAddresses;
  } 

  public create = async (shipToAddress:ShipToAddress) => {
    const newShippingAddress = await this.shipToAddressRepository.save(shipToAddress);
    return newShippingAddress;
  } 

  public update =  async(shipToAddress:ShipToAddress, id: number) => {
    const updatedShippingAddress = await this.shipToAddressRepository.update(id, shipToAddress);
    return updatedShippingAddress;
  } 

  public delete = async (id: number) => {
    const deletedShipppingAddress = await this.shipToAddressRepository.delete(id);
    return deletedShipppingAddress;
  } 
}