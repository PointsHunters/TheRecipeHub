import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { RecipesComponent } from './shared/recipes/recipes.component';
import { MakesComponent } from './shared/makes/makes.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { ErrorComponent } from './shared/error/error.component';
import { ContactComponent } from './shared/contact/contact.component';
import { PersonalDataComponent } from './shared/personal-data/personal-data.component';
import { MyRecipesComponent } from './shared/my-recipes/my-recipes.component';
import { MyMakesComponent } from './shared/my-makes/my-makes.component';
import { FavoritesComponent } from './shared/favorites/favorites.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { DashboardContentComponent } from './shared/dashboard-content/dashboard-content.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'makes', component: MakesComponent},
  {
    path: 'user',
    component: DashboardComponent,
    children: [
      // {path: 'dashboard', redirectTo: 'profile'},
      {path: 'dashboard', component: DashboardContentComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'personal-data', component: PersonalDataComponent},
      {path: 'my-recipes', component: MyRecipesComponent},
      {path: 'my-makes', component: MyMakesComponent},
      {path: 'favorites', component: FavoritesComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'contact', component: ContactComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
