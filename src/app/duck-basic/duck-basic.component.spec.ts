import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckBasicComponent } from './duck-basic.component';

describe('DuckComponent', () => {
  let component: DuckBasicComponent;
  let fixture: ComponentFixture<DuckBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuckBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
