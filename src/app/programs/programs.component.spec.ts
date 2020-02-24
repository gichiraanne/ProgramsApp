import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Store, MemoizedSelector } from "@ngrx/store";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { ListPrograms } from "../programs.actions";
import { ProgramsComponent } from "./programs.component";
import { By } from "@angular/platform-browser";

describe("ProgramsComponent", () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;
  let mockStore: MockStore<{}>;
  let mockUsernameSelector: MemoizedSelector<{}, []>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsComponent],
      providers: [provideMockStore()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    // mockUsernameSelector = mockStore.overrideSelector(
    //   "[Programs Component] load Programs from server",
    //   []
    // );
    fixture.detectChanges();
  });

  it("Component should create", () => {
    expect(component).toBeTruthy();
  });

  // it("Component should list programs", async () => {
  //   mockStore.setState([{"name": "Test Program", "id": 1, "description": ""}])
  //   await fixture.whenStable();
  //   console.log(fixture);
  //   console.log(
  //     fixture.debugElement.nativeElement.querySelector("h5").textContent
  //   );
  //   //console.log(fixture.debugElement.queryAll(By.css('h5'))[0].nativeElement.textContent)
  //   // const firstProgram: HTMLElement = fixture.nativeElement.getElementsByClassName(
  //   //   'program-header'
  //   // )[0].innerText;
  //   // expect(firstProgram.toString()).toContain('Test program');
  // });
});
