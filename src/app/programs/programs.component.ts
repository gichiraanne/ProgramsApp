import { Component, OnInit } from '@angular/core';
import { ListPrograms } from "../program.actions";
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs;

  constructor(private store:Store<{programs: []}>) {
    this.programs = this.store.pipe(select('programs'))
  }

  ngOnInit() {
    this.store.dispatch(ListPrograms())
    // this.programsService.getPrograms().subscribe(
    //   data => this.programs = data
    // )
  }

}
