import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CurrencyDetailsComponent } from 'src/app/currency/details/currency-details.component';
import { CurrenciesListComponent } from 'src/app/currency/list/currencies-list.component';
import { CurrencyResolver } from 'src/app/currency/resolver/currency-resolver.service.ts';
import { RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
      path: 'currency/:id',
      component: CurrencyDetailsComponent,
      resolve: { currency: CurrencyResolver },
  },
  {
      path: '',
      component: CurrenciesListComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    providers: [CurrencyResolver]
  })
  export class CurrencyRoutesModule {
  }
