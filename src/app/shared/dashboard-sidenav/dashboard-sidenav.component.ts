import { Component, OnInit } from '@angular/core';
import { Dashboardz } from '../dashboardz';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})

export class DashboardSidenavComponent implements OnInit {

  dashboardz: Dashboardz = {
    home: false,
    profile: false,
    personal: false,
    recipes: false,
    makes: false,
    favorites: false,
    settings: false,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}