import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document:any) { }

  ngOnInit() {
  }
  goToUrl(){
    this.document.location.href = 'http://localhost:8080/execute';
  }
}
