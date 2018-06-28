import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from 'src/app/currency/model/currency';
import { InjectionToken } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { CurrencyService } from 'src/app/currency/service/currency.service';
import { Page } from 'src/app/currency/model/page';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CurrencyServiceImpl implements CurrencyService {

  constructor(private _http: HttpClient) {

  }

  getCurrencyById(id: number) {
    return this._http.get('https://api.openfintech.io/v1/currencies/' + id, { observe: "response" })
      .pipe(
      map((res: HttpResponse<any>) => {
        // Check if there are a body before parsing the Json.
        if (res.body) {
          return res.body;
        }
      }),
      catchError(this.handleHttpError)
      ).pipe(map(res => this.toCurrency(res.data)));
  }

  searchCurrencies(searchOption: string, searchValue: string, start: number, limit: number): Observable<Page<Currency>> {

    let params: HttpParams = new HttpParams();
    if (searchValue) {
      params = params.set('filter[' + searchOption + ']', searchValue);
    }
    params = params.set('page[number]', start.toString());
    params = params.set('page[size]', limit.toString());
    return this._http.get('https://api.openfintech.io/v1/currencies', { params: params, observe: "response" })
      .pipe(
      map((res: HttpResponse<any>) => {
        // Check if there are a body before parsing the Json.
        if (res.body) {
          return res.body;
        }
      }),
      catchError(this.handleHttpError)
      ).pipe(map(res => this.toPage(res)));
  }

  toPage(json: any): Page<Currency> {
    return { totalResults: json.meta.total, result: json.data.map(this.toCurrency) };
  }

  toCurrency(json: any): Currency {
    return {
      id: json.id,
      attributes: {
        code: json.attributes.code,
        name: json.attributes.name,
        type: json.attributes.currency_type,
        code_iso_numeric3: json.attributes.code_iso_numeric3,
        code_iso_alpha3: json.attributes.code_iso_alpha3,
        symbol: json.attributes.symbol,
        native_symbol: json.attributes.native_symbol,
        category: json.attributes.category
      }
    }
  }

  private handleHttpError(error: HttpErrorResponse) {
    console.error("HttpWrapperService error : ", error);
    return throwError(error.error);
  }
}

