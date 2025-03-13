import { Injectable, OnInit } from '@angular/core';

// Defining ScreenSizeCheckService as an injectable service
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeCheckService implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
  }

  sizeCheck (theSize: number) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= theSize) {
      // this.isScreenSize = false;
      return false;
    } else {
      // this.isScreenSize = true;
      return true;
    }
  }
}

