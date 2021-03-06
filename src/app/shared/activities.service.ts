import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';
import { accessToken } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor(private http: HttpClient) {}

  activitiesURL = 'https://dev-api.toladata.io/api/workflowlevel2/';

  headers = new HttpHeaders().set(
    'Authorization', accessToken
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
   * @return {Observable<Activity>}
   */
  addActivity(activity) {
    return this.http.post<Activity>(
      this.activitiesURL,
      activity,
      this.httpOptions
    );
  }

  /**
   * Updates activity
   * @param {object} activity Updated Activity
   * @return {Observable<Activity>}
   */
  editActivity(activity) {
    const activityId = activity.id;
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
