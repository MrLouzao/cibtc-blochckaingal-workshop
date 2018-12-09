import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainConnectionDataComponent } from './blockchain-connection-data.component';

describe('BlockchainConnectionDataComponent', () => {
  let component: BlockchainConnectionDataComponent;
  let fixture: ComponentFixture<BlockchainConnectionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainConnectionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainConnectionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
