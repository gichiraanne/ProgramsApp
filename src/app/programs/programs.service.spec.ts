import { TestBed } from "@angular/core/testing";

import { ProgramsService } from "./programs.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("ProgramsService", () => {
  let service: ProgramsService;
  let httpTestingController: HttpTestingController;
  const dummyPrograms = [
    {
      id: 1,
      content: "Http Client",
      title: "Testing Angular Service"
    },
    {
      id: 2,
      Content: "Hello World2",
      title: "Testing Angular Services"
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProgramsService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProgramsService);
  });

  it("service should create", () => {
    expect(service).toBeTruthy();
  });

  describe("getPrograms()", () => {

    it("should use GET method", () => {
      service.getPrograms().subscribe();

      const req = httpTestingController.expectOne(`${service.apiURL}`);
      expect(req.request.method).toBe("GET");

      httpTestingController.verify();
    });

    it("should retrieve Programs from server", () => {
      service.getPrograms().subscribe(programs => {
        expect(programs).toEqual(dummyPrograms);
      });
      const req = httpTestingController.expectOne(`${service.apiURL}`);

      req.flush(dummyPrograms);
    });

    afterEach(() => {
      httpTestingController.verify();
    });
  });
});
