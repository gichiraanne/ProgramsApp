import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { DatePipe } from "@angular/common";
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
    private store: Store<{ activities: ActivityState }>,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      name: [, [Validators.required]],
      actual_start_date: [""],
      actual_end_date: [""],
      description: [""]
    });
  }

  /**
   *calls method to create activity
   * @param {object}activity
   */
  createActivity(activity) {
    activity.actual_start_date = this.datePipe.transform(
      activity.actual_start_date,
      "dd.mm.yyyy"
    );
    activity.actual_end_date = this.datePipe.transform(
      activity.actual_end_date,
      "dd.mm.yyyy"
    );
    this.store.dispatch(AddActivity({ payload: activity }));
  }
}
