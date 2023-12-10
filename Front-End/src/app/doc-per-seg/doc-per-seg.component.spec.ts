import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPerSegComponent } from './doc-per-seg.component';

describe('DocPerSegComponent', () => {
  let component: DocPerSegComponent;
  let fixture: ComponentFixture<DocPerSegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocPerSegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocPerSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
