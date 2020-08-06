import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NumberPlate } from '../models/model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
};

enum URL {
  name = 'http://localhost:3000/numberplates'
}

@Injectable({
  providedIn: 'root'
})
export class NumberplatesService {
  private numberplatesUrl = URL.name;

  constructor(private http: HttpClient) { }

  // Get numberplate details from server
  getNumberplates(): Observable<NumberPlate[]> {
    return this.http.get<NumberPlate[]>(this.numberplatesUrl);
  }

  // Change numberplate details on server
  changeDetails(numberplate: NumberPlate): Observable<any> {
    const url = `${this.numberplatesUrl}/${numberplate.id}`;
    return this.http.put(url, numberplate, httpOptions);
  }

  // Delete numberplate from server
  deleteNumberplate(numberplate: NumberPlate): Observable<NumberPlate> {
    const url = `${this.numberplatesUrl}/${numberplate.id}`;
    return this.http.delete<NumberPlate>(url, httpOptions);
  }

  // Add new numberplate
  addNumberplate(numberplate: NumberPlate): Observable<NumberPlate> {
    return this.http.post<NumberPlate>(this.numberplatesUrl, numberplate, httpOptions);
  }

  // Edit existing numberplate
  amendNumberplate(
    id: number,
    numberplate: NumberPlate): Observable<any> {
    const url = `${this.numberplatesUrl}/${id}`;
    return this.http.put(url, numberplate, httpOptions);
  }
}
