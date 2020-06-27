import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MessageButtonComponent } from './message-button.component';

describe('MessageButtonComponent', () => {
  let component: MessageButtonComponent;
  let fixture: ComponentFixture<MessageButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageButtonComponent ]
    })
    .compileComponents();
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
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Message Button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });
});
