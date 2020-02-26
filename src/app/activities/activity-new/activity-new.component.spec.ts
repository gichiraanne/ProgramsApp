import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ActivityNewComponent } from './activity-new.component';
import { Store } from '@ngrx/store';

describe('ActivityNewComponent', () => {
  let component: ActivityNewComponent;
  let fixture: ComponentFixture<ActivityNewComponent>;
  let mockStore: MockStore<[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityNewComponent],
      providers: [provideMockStore()],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityNewComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
