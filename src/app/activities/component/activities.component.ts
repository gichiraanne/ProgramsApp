import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProgramsService } from "../../programs/programs.service";
import { Store } from "@ngrx/store";
import { ListActivities } from "../activities.actions";
import { ActivityState } from "../activities.reducers";
import { map } from "rxjs/operators";
import { Subscription, Observable } from "rxjs";

@Component({
  selector: "app-activities",
  templateUrl: "./activities.component.html",
  styleUrls: ["./activities.component.scss"]
})
export class ActivitiesComponent implements OnInit {
  ToDoSubscription: Subscription;
  activities: Observable<ActivityState>;
  programId;
  activityList;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ activities: ActivityState }>
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
}
