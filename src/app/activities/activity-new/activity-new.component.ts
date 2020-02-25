import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ActivityState } from "../activities.reducers";
import { AddActivity } from "../activities.actions";

@Component({
  selector: "app-activity-new",
  templateUrl: "./activity-new.component.html",
  styleUrls: ["./activity-new.component.scss"]
})
export class ActivityNewComponent implements OnInit {
  activityForm: FormGroup;
  modalShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ activities: ActivityState }>
  ) {

  }

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      name: [, [Validators.required]],
      actual_start_date: [""],
      actual_end_date: [""],
      description: [""]
    });

  }

  /**
   *
   * @param {object}activity
   */
  createActivity(activity) {
    console.log(activity.actual_start_date)
    this.store.dispatch(AddActivity({ payload: activity }));
  }
}
