import express, {Request, Response} from "express";
import { createConnection } from "typeorm";
import { CustomerController } from "./controller/customer.controller";
import { ItemController } from "./controller/item.controller";
import { ItemCrossRefController } from "./controller/itemCrossRef.controller";
import { SalesOrderController } from "./controller/salesOrder.controller";
import { SalesOrderLineController } from "./controller/salesOrderLine.controller";
import { ShipToAddressController } from "./controller/shipToAddress.controller";
///


class Server {
    private salesOrderController: SalesOrderController;
    private salesOrderLineController: SalesOrderLineController;
    private itemController: ItemController;
    private customerController: CustomerController;
    private shipToAddressController: ShipToAddressController;
    private itemCrossRefController: ItemCrossRefController;
    private app: express.Application;

    constructor(){
        this.app = express(); //init the application;
        this.configuration();

        this.salesOrderController = new SalesOrderController();
        this.salesOrderLineController = new SalesOrderLineController();
        this.itemController = new ItemController();
        this.customerController = new CustomerController();
        this.shipToAddressController = new ShipToAddressController();
        this.itemCrossRefController = new ItemCrossRefController();

        this.routes();
    }
//Configure the Server
    public configuration(){
        this.app.set("port", process.env.PORT || 3000);

    }
//Configure the Routes
    public async routes(){
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            driver: "MySQL",
            password: "rootroot",
            username: "root",
            database: "erp_api",
            synchronize: true
   
        })


        this.app.use("/erpAPI/salesOrders/", this.salesOrderController.router)
        this.app.use("/erpAPI/salesOrdersLines/", this.salesOrderLineController.router)
        this.app.use("/erpAPI/items/", this.itemController.router)
        this.app.use("/erpAPI/customer/", this.customerController.router)
        this.app.use("/erpAPI/shipToAddress/", this.shipToAddressController.router)
        this.app.use("/erpAPI/itemCrossRef/", this.itemCrossRefController.router)

        this.app.get("/", (req: Request, res :Response) => {
            res.send("Hello Naija!");

        });

    }

    
// Start server
    public start(){
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening ${this.app.get("port")} port.`);
        });
    }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server