import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Account } from '../account';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
  Currency : string;
  AccountId : string;
  Nickname: string;
  constructor( private http: HttpClient,private route: ActivatedRoute) {  }

  ngOnInit() {
    let code = this.route.snapshot.queryParams["code"];
    console.log(code);
    this.http.get<Account>("http://localhost:8080/authorize?code="+code).subscribe(data => {
      console.log(data);
      console.log("Account Id: "+data.accountId);
      console.log("Currency: "+data.currency);
      console.log("Nickname: "+data.nickname);
      this.AccountId = data.accountId;
      this.Currency = data.currency;
      this.Nickname = data.nickname;
    });
   }

}
