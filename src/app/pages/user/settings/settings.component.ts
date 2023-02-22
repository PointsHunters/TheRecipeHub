import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public isScreenSmOrLarger: boolean = false;
  public theme: string = '';

  constructor(private themeService: ThemeService) {
  }
  
  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
    // console.log(this.theme);
    const screenWidth = window.innerWidth;

    if (screenWidth >= 576) {
      this.isScreenSmOrLarger = true;
    } else {
      this.isScreenSmOrLarger = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 576) {
      this.isScreenSmOrLarger = true;
    } else {
      this.isScreenSmOrLarger = false;
    }
  }

  setTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.theme = theme;
  }
}
