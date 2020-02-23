import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  apiURL = "https://dev-api.toladata.io/api/workflowlevel1/";

  headers = new HttpHeaders()
    .set("Authorization", "Token 7e2d3d50855a9849fdb251d2907512eb6540ca5f");
  httpOptions = {
    headers: this.headers
  };

  getPrograms() {
    return this.http.get(this.apiURL, this.httpOptions);
   // return this.programs;
  }
}
