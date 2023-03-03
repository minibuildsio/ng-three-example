import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckShaderComponent } from './duck-shader.component';

describe('DuckShaderComponent', () => {
  let component: DuckShaderComponent;
  let fixture: ComponentFixture<DuckShaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuckShaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuckShaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
