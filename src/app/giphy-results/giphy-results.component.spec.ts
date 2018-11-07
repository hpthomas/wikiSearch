import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyResultsComponent } from './giphy-results.component';

describe('GiphyResultsComponent', () => {
  let component: GiphyResultsComponent;
  let fixture: ComponentFixture<GiphyResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
