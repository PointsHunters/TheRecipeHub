import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMakesComponent } from './my-makes.component';

describe('MyMakesComponent', () => {
  let component: MyMakesComponent;
  let fixture: ComponentFixture<MyMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMakesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
