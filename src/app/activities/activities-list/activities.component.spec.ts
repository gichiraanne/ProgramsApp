import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivitiesComponent } from "./activities.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Store } from "@ngrx/store";
import { of } from "rxjs";

describe("ActivitiesComponent", () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;
  let mockActivatedRoute;
  let mockStore: MockStore<[]>;
  mockActivatedRoute = {
    snapshot: {
      params: {
        get: () => "578"
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitiesComponent],
      providers: [
        provideMockStore(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    mockStore = TestBed.get(Store);
    component = fixture.componentInstance;
    Object.defineProperty(component, "activities", { writable: true });
    component.activities = of({ activities: [] });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
