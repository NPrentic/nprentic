import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmailService {

  url: string = `${environment.apiUrl}/api/send/email`;

  constructor(private http: HttpClient) { }

  sendEmail(email: Email): Observable<any> {

    return this.http.post(this.url, email, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
}
