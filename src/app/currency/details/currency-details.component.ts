import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from 'src/app/currency/model/currency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {
  currency: Currency;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { currency: Currency }) => {
      this.currency = data.currency;
    });
  }
  redirectToCurrenciesList() {
    this.router.navigate(['/']);
  }

}
