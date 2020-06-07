import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DingoAudioPlayerComponent } from './dingo-audio-player.component';

describe('DingoAudioPlayerComponent', () => {
  let component: DingoAudioPlayerComponent;
  let fixture: ComponentFixture<DingoAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DingoAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DingoAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
