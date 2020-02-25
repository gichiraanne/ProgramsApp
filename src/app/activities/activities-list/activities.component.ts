import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ListActivities, DeleteActivity } from "../activities.actions";
import { ActivityState } from "../activities.reducers";
import { map } from "rxjs/operators";
import { Subscription, Observable } from "rxjs";
import { Activity } from "src/app/models/activity.model";
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"]
})
export class ActivitiesComponent implements OnInit {
  ToDoSubscription: Subscription;
  activities: Observable<ActivityState>;
  programId: number;
  activityList: Activity[];
  activityToEdit: Activity;
  showEditModal: boolean;
  editActivityForm: FormGroup;


  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ activities: ActivityState }>,
    private formBuilder: FormBuilder
  ) {
    this.activities = this.store.select("activities");
  }

  ngOnInit() {
    console.log(this.store);
    this.programId = this.activatedRoute.snapshot.params["id"];
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
  showActivityModal(activityId){

    this.activityToEdit = this.activityList.filter(activity => activity.id == activityId)[0];

    // console.log(this.activityToEdit.name)


    this.showEditModal = true;
  }

}
