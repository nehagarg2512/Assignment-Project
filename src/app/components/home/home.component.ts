import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Iitem } from 'src/app/model/Item';
import { ICategory } from 'src/app/model/Category';
import { CategoryService } from 'src/app/services/categoryservice';
import { IProduct } from 'src/app/model/Product';
import { FormsModule } from '@angular/forms';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  itemName: string;
  itemValue: number;
  itemCategoryId: number;
  item: Iitem;
  items: Array<Iitem>;
  categories: Array<ICategory>;
  products: Array<IProduct>;

  constructor(
    private toastr: ToastrService,
    public categoryService: CategoryService,
    public itemService: ItemService
  ) {
    this.items = [];
    this.products = [];
  }

  ngOnInit(): void {
    this.categoryService.GetAll().subscribe((data) => {
      this.categories = data;
    });
  }

  onSubmit(): void {
    this.addItem();
    this.items = this.itemService.getAll();
    this.products = this.categories.map((c) => {
      return {
        categoryName: c.category,
        total: this.items
          .filter((p) => p.categoryId === c.categoryId)
          .reduce((a, b) => {
            return a + b.value;
          }, 0),
        item: this.items.filter((p) => p.categoryId === c.categoryId),
      };
    });
  }

  addItem(): void {
    this.item = {
      id: null,
      value: this.itemValue,
      categoryId: this.itemCategoryId * 1,
      displayName: this.itemName,
    };
    this.itemService.addItem(this.item);
    this.toastr.success('Row added successfully', 'new Row');
    this.resetForm();
  }

  deleteItem(id: number): void {
    this.itemService.delete(id);
    this.toastr.warning('Row is successfully deleted', 'New Row');
    this.onSubmit();
  }
  resetForm(): void {
    this.itemName = null;
    this.itemValue = null;
    this.itemCategoryId = null;
  }
}
