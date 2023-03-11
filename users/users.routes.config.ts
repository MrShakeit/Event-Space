import { CommonRoutesConfig } from "../common/common.routes.config";
import express from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }
}

//defines class which is extension to commonroutesconfig, has constructor method which has super method(by calling it usersroutes is inheriting properties and methods from common... and sets name of common... class to usersroutes)
