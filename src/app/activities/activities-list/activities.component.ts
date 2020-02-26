import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ListActivities, DeleteActivity } from '../state/activities.actions';
import { ActivityState } from '../state/activities.reducers';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  ToDoSubscription: Subscription;
  activities: Observable<ActivityState>;
  programId: number;
  activityList: Activity[];
  activityToEdit: Activity;
  showEditModal: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ activities: ActivityState }>
  ) {
    this.activities = this.store.select('activities');
  }

  ngOnInit() {
    this.programId = this.activatedRoute.snapshot.params.id;
    this.ToDoSubscription = this.activities
      .pipe(
        map(x => {
          this.activityList = x.activities;
          console.log(this.activityList);
        })
      )
      .subscribe();
    this.store.dispatch(ListActivities({ payload: this.programId }));
  }

  /**
   * calls method to delete activity
   * @param {number} activityId The id of the activity to delete
   */
  deleteActivity(activityId) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.store.dispatch(DeleteActivity({ payload: activityId }));
    }
  }

  /**
   * filters actityList to get actity to edit
   * @param activityId The id of the activity to edit
   */
  showActivityModal(activityId) {
    this.activityToEdit = this.activityList.filter(
      activity => activity.id === activityId
    )[0];
    this.showEditModal = true;
  }
}
