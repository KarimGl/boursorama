import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataTableModule } from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';

import { CurrenciesListComponent } from 'src/app/currency/list/currencies-list.component';
import { CurrencyDetailsComponent } from 'src/app/currency/details/currency-details.component';

import { CurrencyServiceImpl } from 'src/app/currency/service/currency.service.impl';
import { CURRENCY_SVC_TOKEN } from 'src/app/currency/service/currency.service';

import { ROUTES, CurrencyRoutesModule } from 'src/app/currency/currency-routes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    CardModule,
    DropdownModule,
    CurrencyRoutesModule,
  ],
  declarations: [
    CurrenciesListComponent,
    CurrencyDetailsComponent
  ],
  providers: [
    { provide: CURRENCY_SVC_TOKEN, useClass: CurrencyServiceImpl }
  ],
})
export class CurrencyModule { }
