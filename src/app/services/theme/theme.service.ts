import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_COOKIE_NAME = 'selectedTheme';
  private readonly THEME_COOKIE_VALUE = 'themeValue';
  private readonly LIGHT_THEME_CLASS = 'theme-light';
  private readonly DARK_THEME_CLASS = 'theme-dark';

  constructor(private cookieService: CookieService) {}

  loadTheme(theme: string) {
    this.removeThemeClasses();

    switch (theme) {
      case 'light':
        // document.body.classList.add(this.LIGHT_THEME_CLASS);
        document.documentElement.setAttribute('data-bs-theme', 'light');
        break;
      case 'dark':
        // document.body.classList.add(this.DARK_THEME_CLASS);
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        break;
      case 'system':
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
        //   document.body.classList.add(this.DARK_THEME_CLASS);
          document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
        //   document.body.classList.add(this.LIGHT_THEME_CLASS);
          document.documentElement.setAttribute('data-bs-theme', 'light');
        }
        break;
    }
  }

  setTheme(theme: string) {
    this.removeThemeClasses();
    let value = '';

    switch (theme) {
      case 'light':
        // document.body.classList.add(this.LIGHT_THEME_CLASS);
        document.documentElement.setAttribute('data-bs-theme', 'light');
        value = 'light';
        break;
      case 'dark':
        // document.body.classList.add(this.DARK_THEME_CLASS);
        document.documentElement.setAttribute('data-bs-theme', 'dark');
        value = 'dark';
        break;
      case 'system':
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
        //   document.body.classList.add(this.DARK_THEME_CLASS);
          document.documentElement.setAttribute('data-bs-theme', 'dark');
          value = 'dark';
        } else {
        //   document.body.classList.add(this.LIGHT_THEME_CLASS);
          document.documentElement.setAttribute('data-bs-theme', 'light');
          value = 'light';
        }
        break;
    }

    this.cookieService.set(this.THEME_COOKIE_NAME, theme);
    this.cookieService.set(this.THEME_COOKIE_VALUE, value);
  }

  getTheme(): string {
    const theme = this.cookieService.get(this.THEME_COOKIE_NAME);

    if (theme) {
      return theme;
    }

    return 'system';
  }

  private removeThemeClasses() {
    document.body.classList.remove(this.LIGHT_THEME_CLASS);
    document.body.classList.remove(this.DARK_THEME_CLASS);
  }
}