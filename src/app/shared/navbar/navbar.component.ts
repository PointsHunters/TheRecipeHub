import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userAuthStatus = false;
  public isScreenMdOrLarger: boolean = false;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      // console.log('Viewport size >= MD');
      this.isScreenMdOrLarger = false;
    } else {
      // console.log('Viewport size: SM or XS');
      this.isScreenMdOrLarger = true;
    }
  }

  userAuth() {
    if(this.userAuthStatus === false){
      this.userAuthStatus = true;
    }else{
      this.userAuthStatus = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // this.isScreenMdOrLarger = this.breakpointObserver.isMatched([Breakpoints.XSmall, Breakpoints.Small]);
    
    const screenWidth = window.innerWidth;

    // if (screenWidth >= 992) {
    //   console.log('Viewport size: LG');
    // }

    if (screenWidth >= 768) {
      // console.log('Viewport size >= MD');
      this.isScreenMdOrLarger = false;
    } else {
      // console.log('Viewport size: SM or XS');
      this.isScreenMdOrLarger = true;
    }
  }
}