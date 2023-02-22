import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { ComponentsModule } from './components/components.module';
//Pages
import { PagesModule } from './pages/pages.module';

// Services
import { HttpClientModule } from '@angular/common/http';
import { CurrentRouteService } from "./services/current-route/current-route.service";
import { ThemeService } from "./services/theme/theme.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    PagesModule,
  ],
  providers: [
    CurrentRouteService,
    ThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
