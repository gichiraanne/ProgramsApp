import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsComponent } from './programs.component';
import { ProgramsService } from '../programs.service';

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;
  let mockProgramsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsComponent ],
      providers: [
        { provide: ProgramsService, useValue: mockProgramsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    mockProgramsService = jasmine.createSpyObj(['getPrograms']);
    fixture = TestBed.createComponent(ProgramsComponent);
    component = new ProgramsComponent(mockProgramsService);

  });

  it('Component should create', () => {
    expect(component).toBeTruthy();
  });

});
