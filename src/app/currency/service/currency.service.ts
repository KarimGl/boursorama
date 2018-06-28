import { Observable } from 'rxjs';
import { Currency } from 'src/app/currency/model/currency';
import { InjectionToken } from '@angular/core';
import { Page } from 'src/app/currency/model/page';



export interface CurrencyService {

  searchCurrencies(searchOption: string, searchValue: string, start: number, limit: number): Observable<Page<Currency>>;
  getCurrencyById(id: number);
}

export const CURRENCY_SVC_TOKEN = new InjectionToken<CurrencyService>('CurrencyService');

