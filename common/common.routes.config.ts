import express from "express";
export abstract class CommonRoutesConfig {
  app: express.Application;
  name: string;

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  abstract configureRoutes(): express.Application;
}
//defining class with 3 properties app(instance of express app) name(of route configuration) and constructor method(takes 2 parameters)

//thanks to this class other classes can inherit app and name properties and acces getName method
