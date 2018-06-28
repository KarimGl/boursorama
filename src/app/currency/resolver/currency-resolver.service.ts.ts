import { Observable } from 'rxjs';
import { Currency } from 'src/app/currency/model/currency';
import { InjectionToken } from '@angular/core';
import { Page } from 'src/app/currency/model/page';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { CURRENCY_SVC_TOKEN, CurrencyService } from 'src/app/currency/service/currency.service';
import { Inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';



@Injectable()
export class CurrencyResolver implements Resolve<string[]> {
    constructor(@Inject(CURRENCY_SVC_TOKEN) private currencyService: CurrencyService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
      const id: number = route.params['id'];
        return this.currencyService.getCurrencyById(id);
    }
}

