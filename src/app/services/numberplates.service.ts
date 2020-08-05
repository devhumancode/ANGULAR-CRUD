import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Numberplate } from '../models/Numberplate';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class NumberplatesService {
  numberplatesUrl:string =  "http://localhost:3000/numberplates";
  constructor(private http:HttpClient) { }

  //Get numberplate details from server
  getNumberplates():Observable<Numberplate[]> {
    return this.http.get<Numberplate[]>(this.numberplatesUrl);
  }

  //Change numberplate details on server
  changeDetails(numberplate:Numberplate):Observable<any> {
    const url = `${this.numberplatesUrl}/${numberplate.id}`    
    return this.http.put(url, numberplate, httpOptions);
  }

  //Delete numberplate from server
  deleteNumberplate(numberplate:Numberplate):Observable<Numberplate> {
    const url = `${this.numberplatesUrl}/${numberplate.id}`   
    return this.http.delete<Numberplate>(url, httpOptions);
  }

  //Add new numberplate 
  addNumberplate(numberplate:Numberplate):Observable<Numberplate> {
    return this.http.post<Numberplate>(this.numberplatesUrl, numberplate, httpOptions);
  }

  //Edit existing numberplate
  amendNumberplate(numberplate:Numberplate):Observable<any> {
    const url = `${this.numberplatesUrl}/${numberplate.id}`
    return this.http.put(url, numberplate, httpOptions);
  }
}
