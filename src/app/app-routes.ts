import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailsComponent } from 'src/app/currency/details/currency-details.component';
import { CurrencyResolver } from 'src/app/currency/resolver/currency-resolver.service.ts';

export const ROUTES: Routes = [
  { path: '', loadChildren: './currency/currency.module#CurrencyModule' }
];