import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Activity } from "../models/activity.model";

@Injectable({
  providedIn: "root"
})
export class ActivitiesService {
  constructor(private http: HttpClient) {}

  activitiesURL = "https://dev-api.toladata.io/api/workflowlevel2/";

  headers = new HttpHeaders().set(
    "Authorization",
    "Token 7e2d3d50855a9849fdb251d2907512eb6540ca5f"
  );
  httpOptions = {
    headers: this.headers
  };

  /**
   * gets activities from server
   *
   * @param {number} activityId The id of the program
   * @returns {Observable<Activity[]>}
   */
  getActivities(activityId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      `${this.activitiesURL}?workflowlevel1__id=${activityId}`,
      this.httpOptions
    );
  }

  /**
   * Add a new activity
   * @param {object} activity A new activity
   * @return {Observable<any>}
   */
  addActivity(activity) {
    const activityObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(activity);
      }, 1000);
    });
    return activityObservable;
    // return this.http.post<Activity>(
    //   this.activitiesURL,
    //   activity,
    //   this.httpOptions
    // );
  }

  /**
   * Updates activity
   * @param {object} activity Updated Activity
   * @return {Observable<Activity>}
   */
  editActivity(activity) {
    const activityId = activity.id;
    console.log(activityId);
    return this.http.put<Activity>(
      `${this.activitiesURL}${activityId}/`,
      activity,
      this.httpOptions
    );
  }

  /**
   * Deletes activity
   * @param {number} activityId
   */
  deleteActivity(activityId) {
    return this.http.delete<Activity>(
      `${this.activitiesURL}${activityId}/`, this.httpOptions
    );
  }

}
