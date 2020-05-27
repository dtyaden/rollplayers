import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDingoPlayerComponent } from './mat-dingo-player.component';

describe('MatDingoPlayerComponent', () => {
  let component: MatDingoPlayerComponent;
  let fixture: ComponentFixture<MatDingoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDingoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDingoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
