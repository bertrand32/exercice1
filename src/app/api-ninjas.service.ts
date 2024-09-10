import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNinjasService {
  private apiUrl = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'; 
  private apiKey = 'yBzg6u26AreVA+q9WHv0bw==SV7nvfNqgWOYaN7o'; 

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });
    return this.http.get<any>(this.apiUrl, { headers });
  }
}