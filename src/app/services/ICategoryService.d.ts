import { ICategory } from 'src/app/model/Category';
import { Observable } from 'rxjs';

export interface ICategoryService {
  GetAll(): Observable<ICategory[]>;
}
