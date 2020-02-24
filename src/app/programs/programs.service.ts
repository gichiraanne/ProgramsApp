import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Program } from "../models/program.model";
import { Activity } from "../models/activity.model";

@Injectable({
  providedIn: "root"
})
export class ProgramsService {
  constructor(private http: HttpClient) {}

  programsURL = "https://dev-api.toladata.io/api/workflowlevel1/";
  activitiesURL = "https://dev-api.toladata.io/api/workflowlevel2/";

  headers = new HttpHeaders().set(
    "Authorization",
    "Token 7e2d3d50855a9849fdb251d2907512eb6540ca5f"
  );
  httpOptions = {
    headers: this.headers
  };

  /**
   * gets programs from server
   * @returns {Program[]}
   */
  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(this.programsURL, this.httpOptions);
  }

  /**
   * gets activities from server
   *
   * @param {number} programId The id of the program
   * @returns {Activity[]}
   */
  getActivities(programId: number): Observable<Activity[]> {
    console.log(programId)
    const data = this.http.get<Activity[]>(
      `${this.activitiesURL}?workflowlevel1__id=${programId}`,this.httpOptions
    );
    console.log(data)
    return data;
  }
}
