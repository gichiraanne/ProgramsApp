import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Program } from '../models/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  programsURL = 'https://dev-api.toladata.io/api/workflowlevel1/';

  headers = new HttpHeaders().set(
    'Authorization',
    'Token 7e2d3d50855a9849fdb251d2907512eb6540ca5f'
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
