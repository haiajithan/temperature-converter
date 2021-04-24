import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglelayoutComponent } from './singlelayout.component';

describe('SinglelayoutComponent', () => {
  let component: SinglelayoutComponent;
  let fixture: ComponentFixture<SinglelayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglelayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
