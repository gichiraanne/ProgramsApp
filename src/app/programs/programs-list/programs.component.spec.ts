import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Store, MemoizedSelector } from "@ngrx/store";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { ProgramsComponent } from "./programs.component";
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onclick()' }
})

export class RouterLinkDirective {
  @Input('routerLink') linkParams: any;
  navigateTo: any;

  onclick() {
    this.navigateTo = this.linkParams;

  }
}

describe("ProgramsComponent", () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;
  let mockStore: MockStore<[]>;
  let mockSelector: MemoizedSelector<[], any[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsComponent, RouterLinkDirective],
      providers: [provideMockStore()],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.get(Store);
    // mockSelector = mockStore.overrideSelector([],
    //   [{"name": "Test Program", "id": 1, "description": ""}]
    // );
    fixture.detectChanges();
  });

  it("Component should create", () => {
    expect(component).toBeTruthy();
  });

  // it("Component should list programs", async () => {
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
