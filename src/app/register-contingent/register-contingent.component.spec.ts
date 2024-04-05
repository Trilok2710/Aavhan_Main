import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContingentComponent } from './register-contingent.component';

describe('RegisterContingentComponent', () => {
  let component: RegisterContingentComponent;
  let fixture: ComponentFixture<RegisterContingentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterContingentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterContingentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
