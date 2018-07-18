import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from '../account';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Amount } from '../amount';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  Currency : string;
  AccountId : string;
  Nickname: string;
  Amount :string;
  Json: string;
  Transactions :Array<Transaction>;
  constructor( private http: HttpClient,private route: ActivatedRoute) {  }

  ngOnInit() {
    let code = this.route.snapshot.queryParams["code"];
    console.log(code);
    
    this.http.get<Amount>("http://localhost:8080/balance?code="+code).subscribe(data => {
      console.log(data);    
      this.Amount = data.amount;
      this.Currency = data.currency;
      this.Json = data.json;
    });
    // this.http.get<Array<Transaction>>("http://localhost:8080/transactions?code="+code).subscribe(data => {
    //   console.log(data);    
    //   this.Transactions = data;

    // });    
   }

}
