import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from '../home/home.component';
// TODO import here Recipes and Makes components @Danny
import { ContactComponent } from '../contact/contact.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardContentComponent } from '../dashboard-content/dashboard-content.component';
import { ProfileComponent } from '../profile/profile.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { MyRecipesComponent } from '../my-recipes/my-recipes.component';
import { MyMakesComponent } from '../my-makes/my-makes.component';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ErrorComponent } from '../error/error.component';
// Templates
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DashboardSidenavComponent } from '../dashboard-sidenav/dashboard-sidenav.component';

@NgModule({
  declarations: [
    // Pages
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    DashboardContentComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    ErrorComponent,
    // Templates
    ToolbarComponent,
    DashboardSidenavComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    // Pages
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    DashboardContentComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    ErrorComponent,
    // Templates
    ToolbarComponent,
    DashboardSidenavComponent,
  ]
})

export class SharedModule { }
