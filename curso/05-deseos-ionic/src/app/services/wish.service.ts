import { Injectable } from "@angular/core";
import { List } from "../models/list.model";

@Injectable({
  providedIn: "root"
})
export class WishService {
  list: List[] = [];

  constructor() {
    const list1 = new List("Recolectar piedras del infinito");
    const list2 = new List("Héroes a desaparecer");

    this.list.push(list1, list2);
    console.log(this.list);
  }
}
