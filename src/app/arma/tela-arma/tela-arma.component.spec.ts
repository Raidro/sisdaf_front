import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaArmaComponent } from './tela-arma.component';

describe('TelaArmaComponent', () => {
  let component: TelaArmaComponent;
  let fixture: ComponentFixture<TelaArmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaArmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
