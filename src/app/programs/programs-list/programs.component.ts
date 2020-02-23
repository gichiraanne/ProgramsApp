import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../programs.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  programs;

  constructor(private programsService: ProgramsService) { }

  ngOnInit() {
    this.programsService.getPrograms().subscribe(
      data => this.programs = data
    )
  }

}
