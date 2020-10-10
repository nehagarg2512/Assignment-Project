import { Iitem } from 'src/app/model/Item';

export interface IItemService {
  getAll(): Iitem[];
  addItem(item: Iitem): Iitem;
  delete(id: number): boolean;
}
