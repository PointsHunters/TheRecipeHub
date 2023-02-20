import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Pages
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { MakesComponent } from './makes/makes.component';
import { ContactComponent } from './contact/contact.component';
// Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyMakesComponent } from './my-makes/my-makes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
// Error page
import { ErrorComponent } from './error/error.component';
// Templates
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardSidenavComponent } from './dashboard-sidenav/dashboard-sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // Pages
    HomeComponent,
    RecipesComponent,
    MakesComponent,
    ContactComponent,
    // Dashboard
    DashboardComponent,
    DashboardContentComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    SettingsComponent,
    // Error page
    ErrorComponent,
    // Templates
    NavbarComponent,
    DashboardSidenavComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    // Pages
    HomeComponent,
    RecipesComponent,
    MakesComponent,
    ContactComponent,
    // Dashboard
    DashboardComponent,
    DashboardContentComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    SettingsComponent,
    // Error page
    ErrorComponent,
    // Templates
    NavbarComponent,
    DashboardSidenavComponent,
    FooterComponent,
  ]
})

export class SharedModule { }
