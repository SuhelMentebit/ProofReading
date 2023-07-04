import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// const baseUrl = 'http://18.189.207.215:8080/';
const baseUrl = 'https://bizcallcrmforms.com/response.php?';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getAll(url:any){
    return this.http.get(baseUrl + url);
  }

  get(id: any){
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(url:any, data: any,) {
    return this.http.post(baseUrl + url, data);
  }

  update(id: any, data: any) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll() {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any){
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}