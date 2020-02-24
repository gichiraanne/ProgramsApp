import { Component, OnInit } from "@angular/core";
import { ListPrograms } from "../programs.actions";
import { Store, select } from "@ngrx/store";
import { Program } from "../models/program.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-programs",
  templateUrl: "./programs.component.html",
  styleUrls: ["./programs.component.scss"]
})
export class ProgramsComponent implements OnInit {
  programs: Observable<Program[]>;

  constructor(private store: Store<{ programs: Program[] }>) {
    this.programs = this.store.pipe(select("programs"));
  }

  ngOnInit() {
    this.store.dispatch(ListPrograms());
  }
}
