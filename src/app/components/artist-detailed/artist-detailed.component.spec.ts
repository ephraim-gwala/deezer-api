import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailedComponent } from './artist-detailed.component';

describe('ArtistDetailedComponent', () => {
  let component: ArtistDetailedComponent;
  let fixture: ComponentFixture<ArtistDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
