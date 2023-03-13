import { CommonRoutesConfig } from "../common/common.routes.config";
import UserModel from "../repository/user.model";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }

  configureRoutes() {
    this.app
      .route("/users")
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send("List of users");
      })
      .post((req: express.Request, res: express.Response) => {
        UserModel.create({ firstName: "Event", lastName: "Space" })
        res.status(200).send("Post to users");
      });

    this.app
      .route("/users/:userId")
      .all(
        (
          req: express.Request,
          res: express.Response,
          next: express.NextFunction
        ) => {
          next();
        }
      )
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send("GET requested for id ${req.params.userId}");
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send("PUT requested for id ${req.params.userId}");
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send("PUT requested for id ${req.params.userId}");
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send("PATCH requested for id ${req.params.userId}");
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send("DELETE requested for id ${req.params.userId}");
      });
    return this.app;
  }
}

//defines class which is extension to commonroutesconfig, has constructor method which has super method(by calling it usersroutes is inheriting properties and methods from common... and sets name of common... class to usersroutes)
