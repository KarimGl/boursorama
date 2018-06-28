import { TestBed, inject } from '@angular/core/testing';

import { CurrencyService, CURRENCY_SVC_TOKEN } from './currency.service';
import { CurrencyServiceImpl } from 'src/app/currency/service/currency.service.impl';

describe('CurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CURRENCY_SVC_TOKEN, useClass: CurrencyServiceImpl },
      ]
    });
  });

  it('should be created', inject([CURRENCY_SVC_TOKEN], (service: CurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
