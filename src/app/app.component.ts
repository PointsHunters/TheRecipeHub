import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TheRecipeHub';
  theme: string;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.getTheme();
  }

  ngOnInit(): void {
    this.themeService.loadTheme(this.theme);
  }
}
