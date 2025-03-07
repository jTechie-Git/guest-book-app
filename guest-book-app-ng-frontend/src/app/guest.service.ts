import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private baseUrl = 'http://localhost:8080/api/v1/guest';

  constructor(private http: HttpClient) { }

  getGuest(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createGuest(guest: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, guest);
  }

  updateGuest({ id, value }: { id: number; value: any; }): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteGuest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getGuestList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
