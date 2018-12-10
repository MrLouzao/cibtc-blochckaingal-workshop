import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractLoadComponent } from './contract-load.component';

describe('ContractLoadComponent', () => {
  let component: ContractLoadComponent;
  let fixture: ComponentFixture<ContractLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
