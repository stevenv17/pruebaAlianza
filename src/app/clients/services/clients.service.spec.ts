import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService]
    });
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
