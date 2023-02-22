import { NgModule } from '@angular/core';

// Pages
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyMakesComponent } from './my-makes/my-makes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SettingsComponent } from './settings/settings.component';
// Shared
import { UserSidenavComponent } from './shared/user-sidenav/user-sidenav.component';

// Modules
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    // Pages
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    SettingsComponent,
    // Shared
    UserSidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    // Pages
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    PersonalDataComponent,
    MyRecipesComponent,
    MyMakesComponent,
    FavoritesComponent,
    SettingsComponent,
    // Shared
    UserSidenavComponent,
  ]
})
export class UserModule { }
