import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberplateItemComponent } from './numberplate-item.component';

describe('NumberplateItemComponent', () => {
  let component: NumberplateItemComponent;
  let fixture: ComponentFixture<NumberplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
