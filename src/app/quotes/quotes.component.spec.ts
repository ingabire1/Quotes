import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { QuotsComponent } from "./quotes.component";

describe("QuotsComponent", () => {
  let component: QuotsComponent;
  let fixture: ComponentFixture<QuotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuotsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
