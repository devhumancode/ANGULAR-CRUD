import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumberplateComponent } from './add-numberplate.component';

describe('AddNumberplateComponent', () => {
  let component: AddNumberplateComponent;
  let fixture: ComponentFixture<AddNumberplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNumberplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumberplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
