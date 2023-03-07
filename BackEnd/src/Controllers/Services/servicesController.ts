import { Request, Response } from "express";
import { enumServicesAuth, servicesURL } from "../../Static/Elements/services";
import { getServicesByIds } from "../../Utils/researchDB";
import { Service } from "../../Models/tables"

class ServicesController {
  public async auth(req: Request, res: Response) {
    const serviceId: number = +req.params.id;

    if (serviceId - 1 < servicesURL.length)
      res.status(200).send(servicesURL[serviceId - 1]());
    else
      res.status(400).send({
        "err": "Invalid service ID"
      });
  }

  public async getAuthServicesNames(req: Request, res: Response) {
    try {
      const authIds: number[] = Object.values(enumServicesAuth).filter(value => typeof value === 'number') as number[];
      const services: Service[] = await getServicesByIds(authIds);
      const names: string[] = services.map(element => {
        return (element.title != "Calendar") ? element.title : "Google";
      });

      res.status(200).send(names);
    } catch (error) {
      console.log(error)
      res.status(400).send("An error occured.");
    }
  }
}

export default ServicesController;