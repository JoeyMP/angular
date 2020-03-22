import { Injectable } from "@angular/core";
import { List } from "../models/lista.model";

@Injectable({
  providedIn: "root"
})
export class WishService {
  list: List[] = [];

  constructor() {
    console.log('Service started')
  }
}
