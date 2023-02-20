import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})

export class DashboardSidenavComponent implements OnInit {

  username = 'Username';
  email = 'email@email.com';
  
  constructor(private router: Router) {}

  isActive(path: string): boolean {
    // console.log(this.router.url,' ',path);
    return this.router.url === path;
  }

  ngOnInit(): void {
  }

}