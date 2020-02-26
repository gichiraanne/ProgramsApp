import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { ActivityState } from '../state/activities.reducers';
import { AddActivity } from '../state/activities.actions';

@Component({
  selector: 'app-activity-new',
  templateUrl: './activity-new.component.html',
  styleUrls: ['./activity-new.component.scss']
})
export class ActivityNewComponent implements OnInit {
  activityForm: FormGroup;
  modalShow = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ activities: ActivityState }>,
  ) {}

  ngOnInit() {
    this.activityForm = this.formBuilder.group({
      name: [, [Validators.required]],
      actual_start_date: [''],
      actual_end_date: [''],
      description: ['']
    });
  }

  /**
   *calls method to create activity
   * @param {object}activity
   */
  createActivity(activity) {
    activity.actual_start_date = moment(
      activity.actual_start_date, 'YYYY-MM-DDThh:mm:ssZ').format('YYYY-MM-DDThh:mm:ssZ');

    activity.actual_end_date = moment(
      activity.actual_end_date, 'YYYY-MM-DDThh:mm:ssZ').format('YYYY-MM-DDThh:mm:ssZ');

    this.store.dispatch(AddActivity({ payload: activity }));
  }
}
