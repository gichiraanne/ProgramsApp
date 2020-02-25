import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ActivitiesService } from "./activities.service";

describe("ActivitiesService", () => {
  let service: ActivitiesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivitiesService]
    })
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ActivitiesService);
  }
  );

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
