import { TestBed } from '@angular/core/testing';

import { ApiConfigService } from './api-config.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApiConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ApiConfigService = TestBed.get(ApiConfigService);
    expect(service).toBeTruthy();
  });
});
