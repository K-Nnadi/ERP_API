import { Request, Response, Router } from "express";
import { SalesOrderLine } from "../database/entities/salesOrderLine.entity";
import { SalesOrderLineService } from "../services/salesOrderLine.service";

export class SalesOrderLineController {
    public router: Router;
    private salesOrderLineService: SalesOrderLineService;

  constructor(){
    this.salesOrderLineService = new SalesOrderLineService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const salesOrderLines = await this.salesOrderLineService.index();
    res.send(salesOrderLines).json();
  } 

  public create = async (req: Request, res: Response) => {
    const salesOrderLine = req['body'] as SalesOrderLine;
    const newSalesOrderLine = await this.salesOrderLineService.create(salesOrderLine);
    res.send(newSalesOrderLine);
  }

  public update = async (req: Request, res: Response) => {
    const salesOrderLine = req['body'] as SalesOrderLine;
    const id =  req['params']['id'];
    
    res.send(this.salesOrderLineService.update(salesOrderLine, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.salesOrderLineService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}