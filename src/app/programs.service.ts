import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Program } from "./models/program.model";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  apiURL = "https://dev-api.toladata.io/api/workflowlevel1/";
  // https://dev-api.toladata.io/api/workflowlevel2/?workflowlevel1__id=94

  headers = new HttpHeaders().set(
    "Authorization",
    "Token 7e2d3d50855a9849fdb251d2907512eb6540ca5f"
  );
  httpOptions = {
    headers: this.headers
  };

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.apiURL, this.httpOptions);
  }
}
