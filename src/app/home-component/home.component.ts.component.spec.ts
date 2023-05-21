import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentTsComponent } from './home.component.ts.component';

describe('HomeComponentTsComponent', () => {
  let component: HomeComponentTsComponent;
  let fixture: ComponentFixture<HomeComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
