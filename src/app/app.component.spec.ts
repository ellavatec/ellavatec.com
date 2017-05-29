import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core/core';
import { By } from '@angular/platform-browser';


import { expect } from 'chai';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('header'));
    htmlEl = debugEl.nativeElement;
  }));

  describe('App creation', () => {

    it('should create the app', async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).to.be.true;
    }));
  })
});
