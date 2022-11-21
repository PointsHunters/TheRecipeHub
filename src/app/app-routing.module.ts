import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { MyMakesComponent } from './my-makes/my-makes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      // {path: 'dashboard', redirectTo: 'profile'},
      {path: '', component: DashboardContentComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'personal-data', component: PersonalDataComponent},
      {path: 'my-recipes', component: MyRecipesComponent},
      {path: 'my-makes', component: MyMakesComponent},
      {path: 'favorites', component: FavoritesComponent}
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
