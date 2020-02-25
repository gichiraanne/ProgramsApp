import { Component, OnInit, Input } from "@angular/core";
import { Activity } from "src/app/models/activity.model";
import { Store } from "@ngrx/store";
import { ActivityState } from "../activities.reducers";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { EditActivity } from '../activities.actions';

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
      name: [this.activityData.name, [Validators.required]],
      actual_start_date: [this.activityData.actual_start_date],
      actual_end_date: [this.activityData.actual_end_date],
      description: [this.activityData.description],
      id: [this.activityData.id]
    });
  }

  ngOnInit() {

  }

  /**
   * calls method to edit activity
   * @param {number} activityId
   */
  editActivity(activity) {
    console.log(activity);
    this.store.dispatch(EditActivity({payload: activity}))
  }
}
