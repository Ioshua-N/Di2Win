import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocDisComponent } from './doc-dis.component';

describe('DocDisComponent', () => {
  let component: DocDisComponent;
  let fixture: ComponentFixture<DocDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocDisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
