import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { LazyLoadEvent } from "primeng/primeng";
import { CURRENCY_SVC_TOKEN, CurrencyService } from 'src/app/currency/service/currency.service';
import { Page } from 'src/app/currency/model/page';
import { Currency } from 'src/app/currency/model/currency';
import { Router } from '@angular/router';

@Component({
  selector: 'currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {
  totalRecords: number;
  currencies: Currency[];
  selectedCurrency: Currency;
  searchValue: string;
  searchOption: any = { label: 'Any', value: 'search' };
  searchOptions: any[];


  constructor( @Inject(CURRENCY_SVC_TOKEN) private currencyService: CurrencyService,
    private router: Router) {
    this.searchOptions = [
      { label: 'Any', value: 'search' },
      { label: 'Id', value: 'id' },
      { label: 'Code', value: 'code' },
      { label: 'Name', value: 'name' },
      { label: 'Type', value: 'currency_type' }
    ];
  }

  ngOnInit() {

  }
  searchOnValueChange(event: any) {
    this.searchValue = event;
    this.searchCurrencies(this.searchOption.value, this.searchValue);
  }
  searchOnKeyChange(event: any) {
    this.searchOption = event;
    this.searchCurrencies(this.searchOption.value, this.searchValue);
  }
  loadCurrenciesLazy(event: LazyLoadEvent) {
    this.searchCurrencies(this.searchOption.value, this.searchValue, event.first / event.rows, event.rows);
  }

  searchCurrencies(searchOption = 'search', searchValue = '', start = 0, limit = 5): any {

    this.currencyService.searchCurrencies(searchOption, searchValue, start + 1, limit).subscribe(
      this.onSearchOk.bind(this),
      this.onSearchError.bind(this)
    );
  }

  private onSearchOk(page: Page<Currency>) {
    this.currencies = page.result;
    this.totalRecords = page.totalResults;
  }

  private onSearchError(error: any) {
    console.error("An error occured when searching currencies {}", error);
  }

  redirectToCurrencyDetails() {
    this.router.navigate(['currency', this.selectedCurrency.id]);
  }

}
