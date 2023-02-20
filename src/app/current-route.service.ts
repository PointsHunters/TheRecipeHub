import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

// Defining CurrentRouteService as an injectable service
@Injectable({
  providedIn: 'root'
})
export class CurrentRouteService {

  // Creating a subject to emit current route changes
  private currentRouteSubject: Subject<string> = new Subject<string>();
  // Creating an observable that can be subscribed to receive current route changes
  public currentRoute$: Observable<string> = this.currentRouteSubject.asObservable();

  // Constructor to inject Router service and subscribe to its NavigationEnd events
  constructor(private router: Router) {
    this.router.events.pipe(
      // Filtering out only NavigationEnd events
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Splitting the URL to get route parts
      const urlParts = event.url.split('/');
      // Finding the index of the "dashboard" route
      const dashboardIndex = urlParts.indexOf('dashboard');

      // If "dashboard" route is present in URL, set current route as "dashboard"
      if (dashboardIndex >= 0) {
        this.currentRouteSubject.next('dashboard');
      } 
      // If "dashboard" route is not present, set current route as the first route part after the domain name
      else {
        this.currentRouteSubject.next(urlParts[1]);
      }
    });
  }
}

