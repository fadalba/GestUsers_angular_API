import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurerComponent } from './restaurer.component';

describe('RestaurerComponent', () => {
  let component: RestaurerComponent;
  let fixture: ComponentFixture<RestaurerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
