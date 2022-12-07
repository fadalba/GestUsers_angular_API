import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArchivesComponent } from './list-archives.component';

describe('ListArchivesComponent', () => {
  let component: ListArchivesComponent;
  let fixture: ComponentFixture<ListArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArchivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
