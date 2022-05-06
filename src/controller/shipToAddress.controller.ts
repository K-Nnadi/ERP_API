import { Request, Response, Router } from "express";
import { ShipToAddress } from "../database/entities/shipToOrder.entity";
import { ShipToAddressService } from "../services/shipToAddress.service";

export class ShipToAddressController {
    public router: Router;
    private shipToAddressService: ShipToAddressService;

  constructor(){
    this.shipToAddressService = new ShipToAddressService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const shippingAddresses = await this.shipToAddressService.index();
    res.send(shippingAddresses).json();
  } 

  public create = async (req: Request, res: Response) => {
    const shippingAddress = req['body'] as ShipToAddress;
    const newShippingAddress = await this.shipToAddressService.create(shippingAddress);
    res.send(newShippingAddress);
  }

  public update = async (req: Request, res: Response) => {
    const shippingAddress = req['body'] as ShipToAddress;
    const id =  req['params']['id'];
    
    res.send(this.shipToAddressService.update(shippingAddress, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.shipToAddressService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}