import { Injectable } from '@angular/core';
import { Iitem } from 'src/app/model/Item';
import { IItemService } from 'src/app/services/IItem.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements IItemService {
  items: Array<Iitem>;
  maxId: number;
  constructor() {
    this.items = [
      {
        id: 6004,
        displayName: 'Jacket',
        value: 34,
        categoryId: 2,
      },
      {
        id: 6005,
        displayName: 'Jeans',
        value: 14,
        categoryId: 2,
      },
      {
        id: 6006,
        displayName: 'TV',
        value: 2000,
        categoryId: 1,
      },
    ];

    this.maxId = 6006;
  }
  addItem(item: Iitem): Iitem {
    this.maxId += 1;
    item.id = this.maxId;
    this.items.push(item);
    return item;
  }
  getAll(): Iitem[] {
    return this.items;
  }
  delete(id: number): boolean {
    this.maxId -= 1;
    this.items = this.items.filter((i) => i.id != id);
    return true;
  }
}
