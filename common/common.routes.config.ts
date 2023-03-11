import express from "express";
export class CommonRoutesConfig {
  app: express.Application;
  name: string;

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
//defining class with 3 properties app(instance of express app) name(of route configuration) and constructor method(takes 2 parameters)

//thanks to this class other classes can inherit app and name properties and acces getName method
