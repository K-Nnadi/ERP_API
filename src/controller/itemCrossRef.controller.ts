import { Request, Response, Router } from "express";
import { ItemCrossRef } from "../database/entities/itemCrossRef.entity";
import { ItemCrossRefService } from "../services/itemCrossRef.service";

export class ItemCrossRefController {
    public router: Router;
    private itemCrossRefService: ItemCrossRefService;

  constructor(){
    this.itemCrossRefService = new ItemCrossRefService(); // Create a new instance of PostController
    this.router = Router();
    this.routes();
  }

  public index = async (req: Request, res: Response) => {
    const itemCrossRefs = await this.itemCrossRefService.index();
    res.send(itemCrossRefs).json();
  } 

  public create = async (req: Request, res: Response) => {
    const itemCrossRef = req['body'] as ItemCrossRef;
    const newItemCrossRef = await this.itemCrossRefService.create(itemCrossRef);
    res.send(newItemCrossRef);
  }

  public update = async (req: Request, res: Response) => {
    const itemCrossRef = req['body'] as ItemCrossRef;
    const id =  req['params']['id'];
    
    res.send(this.itemCrossRefService.update(itemCrossRef, Number(id)));
  }

  public delete = async (req: Request, res: Response) => {
    const id =  req['params']['id'];
    res.send(this.itemCrossRefService.delete(Number(id)));
  }

    public routes(){
        this.router.get("/", this.index);
        this.router.post("/", this.create);
        this.router.put("/:id", this.update);
        this.router.delete("/:id", this.delete);
    }
}