import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSegComponent } from './type-seg.component';

describe('TypeSegComponent', () => {
  let component: TypeSegComponent;
  let fixture: ComponentFixture<TypeSegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeSegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypeSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
