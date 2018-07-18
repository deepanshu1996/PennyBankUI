import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  bankSlected(){
    this.router.navigate(['dashboard']);
  }

}
