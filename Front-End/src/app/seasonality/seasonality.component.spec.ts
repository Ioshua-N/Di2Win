import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalityComponent } from './seasonality.component';

describe('SeasonalityComponent', () => {
  let component: SeasonalityComponent;
  let fixture: ComponentFixture<SeasonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonalityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
