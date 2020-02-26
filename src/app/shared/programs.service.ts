import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from '../models/program.model';
import { accessToken } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  programsURL = 'https://dev-api.toladata.io/api/workflowlevel1/';

  headers = new HttpHeaders().set(
    'Authorization', accessToken
  );
  httpOptions = {
    headers: this.headers
  };

  /**
   * gets programs from server
   * @returns {Observable<Program>} an observable of type Program
   */
  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsURL, this.httpOptions);
  }
}
