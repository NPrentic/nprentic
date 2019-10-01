import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ResumeService{

  url: string = `${environment.apiUrl}/api/resume/download`;

  constructor(private http: HttpClient) {}

  getPdfFile(): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');

    return this.http.get(this.url, {
      headers: headers, responseType: 'blob'
      });
  }
}
