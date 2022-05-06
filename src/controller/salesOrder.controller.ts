import { Request, Response, Router } from "express";
import { SalesOrder } from "../database/entities/salesOrder.entity";
import { SalesOrderService } from "../services/salesOrder.service";

export class SalesOrderController {
    public router: Router;
    private salesOrderService: SalesOrderService;

  constructor(){
    this.salesOrderService = new SalesOrderService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const salesOrders = await this.salesOrderService.index();
    res.send(salesOrders).json();
  } 

  public create = async (req: Request, res: Response) => {
    const salesOrder = req['body'] as SalesOrder;
    const newSalesOrder = await this.salesOrderService.create(salesOrder);
    res.send(newSalesOrder);
  }

  public update = async (req: Request, res: Response) => {
    const salesOrder = req['body'] as SalesOrder;
    const id =  req['params']['id'];
    
    res.send(this.salesOrderService.update(salesOrder, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.salesOrderService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}