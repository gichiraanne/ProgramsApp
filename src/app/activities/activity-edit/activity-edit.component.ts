import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "src/app/models/activity.model";
import { Store } from "@ngrx/store";
import { ActivityState } from "../state/activities.reducers";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EditActivity } from "../state/activities.actions";

@Component({
  selector: "app-activity-edit",
  templateUrl: "./activity-edit.component.html",
  styleUrls: ["./activity-edit.component.scss"]
})
export class ActivityEditComponent implements OnInit {
  @Input() activityData: Activity;
  activityForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ activities: ActivityState }>
  ) {
    this.activityForm = this.formBuilder.group({
      name: [, [Validators.required]],
      actual_start_date: [],
      actual_end_date: [],
      description: [],
      id: []
    });
  }

  ngOnInit() {
    if (this.activityData) {
      this.activityForm.patchValue(this.activityData);
    }
  }

  /**
   * calls method to edit activity
   * @param {number} activityId
   */
  editActivity(activity) {
    console.log(activity);
    this.store.dispatch(EditActivity({ payload: activity }));
  }
}
