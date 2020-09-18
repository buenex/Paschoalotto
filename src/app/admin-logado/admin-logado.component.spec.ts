import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogadoComponent } from './admin-logado.component';

describe('AdminLogadoComponent', () => {
  let component: AdminLogadoComponent;
  let fixture: ComponentFixture<AdminLogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
