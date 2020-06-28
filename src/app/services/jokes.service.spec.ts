import { TestBed } from '@angular/core/testing';

import { JokesService } from './jokes.service';
import { HttpClient } from '@angular/common/http';

describe('JokesService', () => {
  let service: JokesService;
  let HttpClientMock: any;
  HttpClientMock = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: HttpClientMock }],
    });
    service = TestBed.inject(JokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
