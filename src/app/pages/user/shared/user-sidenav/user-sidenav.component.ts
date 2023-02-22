import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss']
})



export class UserSidenavComponent implements OnInit {

  username = 'Username';
  email = 'email@email.com';
  public themeLight: boolean = false;
  
  constructor(private router: Router, private cookieService: CookieService) {}
  
  onRouteChange(): void {
    const themeVal = this.cookieService.get('themeValue');
    if(themeVal === 'light'){
      this.themeLight = true;
    }else{
      this.themeLight = false;
    }
  }
  
  isActive(path: string): boolean {
    this.onRouteChange();
    // console.log(this.router.url,' ',path);
    return this.router.url === path;
  }
  
  ngOnInit(): void {
    this.onRouteChange();
  }
  
}