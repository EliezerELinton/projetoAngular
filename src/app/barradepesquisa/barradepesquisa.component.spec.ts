import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarradepesquisaComponent } from './barradepesquisa.component';

describe('BarradepesquisaComponent', () => {
  let component: BarradepesquisaComponent;
  let fixture: ComponentFixture<BarradepesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarradepesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarradepesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
