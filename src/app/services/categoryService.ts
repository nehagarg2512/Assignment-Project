import { ICategoryService } from './ICategoryService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/model/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICategoryService {
  fileName: string = 'app/data/category.json';

  constructor(public http: HttpClient) {}

  GetAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.fileName);
  }
}
