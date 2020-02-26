import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActivityEditComponent } from './activity-edit.component';
import { Store } from '@ngrx/store';

describe('ActivityEditComponent', () => {
  let component: ActivityEditComponent;
  let fixture: ComponentFixture<ActivityEditComponent>;
  let mockStore: MockStore<[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityEditComponent],
      providers: [provideMockStore()],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEditComponent);
    component = fixture.componentInstance;
    component.activityData = {
      url: 'https://dev-api.toladata.io/api/workflowlevel2/934/',
      id: 934,
      site_uuid: [],
      actual_start_date: null,
      actual_end_date: null,
      actual_duration: null,
      actual_cost: '0.00',
      address: null,
      capacity_built: null,
      description: null,
      description_of_community_involvement: null,
      description_of_government_involvement: null,
      expected_end_date: '2019-02-25T03:00:13.566000+01:00',
      expected_start_date: '2019-02-25T03:00:13.566000+01:00',
      issues_and_challenges: null,
      justification_background: null,
      lessons_learned: null,
      level2_uuid: '940b7794-6389-4d64-aef2-d092453a001e',
      name: 'test1',
      notes: null,
      parent_workflowlevel2: 0,
      quality_assured: null,
      risks_assumptions: null,
      short_name: null,
      site_instructions: null,
      total_cost: '0.00',
      total_estimated_budget: '0.00',
      type: null,
      effect_or_impact: null,
      create_date: '2019-02-25T03:00:16.230160+01:00',
      edit_date: '2019-02-25T03:00:16.230168+01:00',
      status: 'green',
      progress: 'open',
      donor_currency: null,
      local_currency: null,
      milestone: null,
      office: null,
      sector: null,
      staff_responsible: null,
      workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/578/',
      created_by: 'https://dev-api.toladata.io/api/users/46/',
      approval: [],
      indicators: [],
      site: [],
      stakeholder: [],
      sub_sector: []
    };
    mockStore = TestBed.get(Store);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
