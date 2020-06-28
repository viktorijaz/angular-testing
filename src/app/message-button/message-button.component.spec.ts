import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { JokesService } from '../services/jokes.service';
import { MessageButtonComponent } from './message-button.component';

describe('MessageButtonComponent', () => {
  let component: MessageButtonComponent;
  let fixture: ComponentFixture<MessageButtonComponent>;
  let de: DebugElement;
  let MockJokeService: any;

  beforeEach(async(() => {
    MockJokeService = {
      getJokes: () => of('some jokes'),
    };

    TestBed.configureTestingModule({
      declarations: [MessageButtonComponent],
      providers: [{ provide: JokesService, useValue: MockJokeService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have a H1 tag of `Message Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe(
      'Message Button'
    );
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it('should have message content from an observable', () => {
    component.contentObservable.subscribe((content) => {
      expect(content).toBeDefined();
      expect(content).toBe('some jokes');
    });
  });
});
