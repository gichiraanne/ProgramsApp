import { TestBed } from '@angular/core/testing';
import { ProgramsService } from './programs.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Program } from '../models/program.model';

describe('ProgramsService', () => {
  let service: ProgramsService;
  let httpTestingController: HttpTestingController;
  const dummyPrograms: Program[] = [
    {
      url: 'https://dev-api.toladata.io/api/workflowlevel1/990/',
      id: 990,
      status: '',
      budget: 200.54,
      actuals: 100.54,
      difference: 100.0,
      level1_uuid: '74761398-2631-4a2a-bae5-e1433306078f',
      unique_id: null,
      name: '',
      funding_status: '',
      cost_center: '',
      description: '',
      public_dashboard: false,
      start_date: null,
      end_date: null,
      create_date: '2019-02-22T10:50:22.084581+01:00',
      edit_date: '2019-02-22T10:50:22.084592+01:00',
      sort: 0,
      organization: 'https://dev-api.toladata.io/api/organization/1/',
      portfolio: null,
      fund_code: [],
      award: [],
      sector: [],
      sub_sector: [],
      country: [],
      milestone: [],
      user_access: ['https://dev-api.toladata.io/api/tolauser/104/']
    },
    {
      url: 'https://dev-api.toladata.io/api/workflowlevel1/561/',
      id: 561,
      status: '',
      budget: 0.0,
      actuals: 0.0,
      difference: 0,
      level1_uuid: '7b3d2088-da62-4812-ae8b-27a9b69bfc8c',
      unique_id: null,
      name: '0.0.58',
      funding_status: '',
      cost_center: '',
      description: '',
      public_dashboard: false,
      start_date: '2018-12-27T23:00:00+01:00',
      end_date: '2018-12-27T23:00:00+01:00',
      create_date: '2018-12-27T21:45:42.511551+01:00',
      edit_date: '2018-12-27T21:45:42.511560+01:00',
      sort: 0,
      organization: 'https://dev-api.toladata.io/api/organization/1/',
      portfolio: null,
      fund_code: [],
      award: [],
      sector: [],
      sub_sector: [],
      country: [],
      milestone: [],
      user_access: ['https://dev-api.toladata.io/api/tolauser/74/']
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

  it('service should create', () => {
    expect(service).toBeTruthy();
  });

  describe('getPrograms()', () => {
    it('should use GET method', () => {
      service.getPrograms().subscribe();

      const req = httpTestingController.expectOne(`${service.programsURL}`);
      expect(req.request.method).toBe('GET');

      httpTestingController.verify();
    });

    it('should retrieve Programs from server', () => {
      service.getPrograms().subscribe(programs => {
        expect(programs).toEqual(dummyPrograms);
      });
      const req = httpTestingController.expectOne(`${service.programsURL}`);

      req.flush(dummyPrograms);
    });

    afterEach(() => {
      httpTestingController.verify();
    });
  });
});
