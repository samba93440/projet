import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleOnlineService {

  private url = 'https://toto-964824.herokuapp.com/api/articles';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  // read One
  getOne(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  // create

  create(ressource: any) {
    return this.http.post(this.url, ressource) ;
  }

  // update

  update(ressource, id) {
    console.log(ressource._id);


    delete ressource._id;
    return this.http.put(`${this.url}/${id}`, ressource) ;
  }

  // delete

  delete(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
