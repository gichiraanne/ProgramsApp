import { Component, OnInit } from "@angular/core";
import { ListPrograms } from "../programs.actions";
import { Store, select } from "@ngrx/store";
import { Program } from "../../models/program.model";
import { Observable, Subscription } from "rxjs";
import {ProgramState} from "../programs.reducers";
import { map } from "rxjs/operators";

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.scss"]
})
export class ProgramsComponent implements OnInit {
  ToDoSubscription: Subscription;
  programs: Observable<ProgramState>;
  programsList;

  constructor(private store: Store<{ programs: ProgramState }>) {
    this.programs = this.store.pipe(select("programs"));
  }

  ngOnInit() {
    this.ToDoSubscription = this.programs
      .pipe(
        map(x => {
          this.programsList = x.programs;
          console.log(this.programsList);
        })
      )
      .subscribe();

    this.store.dispatch(ListPrograms());
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
