import { Request, Response, Router } from "express";
import { Customer } from "../database/entities/customer.entity";
import { CustomerService } from "../services/Customer.service";

export class CustomerController {
    public router: Router;
    private customerService: CustomerService;

  constructor(){
    this.customerService = new CustomerService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const customers = await this.customerService.index();
    res.send(customers).json();
  } 

  public create = async (req: Request, res: Response) => {
    const customer = req['body'] as Customer;
    const newCustomer = await this.customerService.create(customer);
    res.send(newCustomer);
  }

  public update = async (req: Request, res: Response) => {
    const customer = req['body'] as Customer;
    const id =  req['params']['id'];
    
    res.send(this.customerService.update(customer, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.customerService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}