import { Request, Response, Router } from "express";
import { Item } from "../database/entities/Item.entity";
import { ItemService } from "../services/item.service";

export class ItemController {
    public router: Router;
    private itemService: ItemService;

  constructor(){
    this.itemService = new ItemService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const items = await this.itemService.index();
    res.send(items).json();
  } 

  public create = async (req: Request, res: Response) => {
    const item = req['body'] as Item;
    const newItem = await this.itemService.create(item);
    res.send(newItem);
  }

  public update = async (req: Request, res: Response) => {
    const item = req['body'] as Item;
    const id =  req['params']['id'];
    
    res.send(this.itemService.update(item, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.itemService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}