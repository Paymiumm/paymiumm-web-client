import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationExtComponent } from './navigation-ext.component';

describe('NavigationExtComponent', () => {
  let component: NavigationExtComponent;
  let fixture: ComponentFixture<NavigationExtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationExtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
