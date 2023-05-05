import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ACTIVITY_LIST, ACTIVITY_TODO} from "../constants/api.constants";
import {Observable} from "rxjs";
import {TodoList, UserModel} from "../models/user-model";

@Injectable({
  providedIn: 'root'
})
export class ActivityListServices {
  email: string = 'edo.sirait25@gmail.com'
  constructor(private http : HttpClient) {}

  getListActivity(): Observable<any> {
    return this.http.get<any>(ACTIVITY_LIST + '?email=' + this.email);
  }

  addListActivity(data: UserModel) {
    return this.http.post<UserModel>(ACTIVITY_LIST + '/', data);
  }

  getDetailList(id: number) {
    return this.http.get<TodoList>(ACTIVITY_LIST + '/' + id);
  }

  deleteListActivity(id: number) {
    return this.http.delete<number>(ACTIVITY_LIST + '/' + id);
  }

  editTitleTodoList(id: number, data: any) {
    const val = {title: data};
    return this.http.patch<any>(ACTIVITY_LIST + '/' + id, val);
  }

  addTodo(data: any) {
    return this.http.post<any>(ACTIVITY_TODO , data);
  }

  deleteTodoList(id: number) {
    return this.http.delete<number>(ACTIVITY_TODO + '/' + id);
  }
}

