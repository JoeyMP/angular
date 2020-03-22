import { ListItem } from "./list-item.model";

export class List {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  finished: boolean;
  item: ListItem[];

  constructor(title: string) {
    this.title = title;
    this.startDate = new Date();
    this.finished = false;
    this.item = [];
    this.id = new Date().getTime();
  }
}
