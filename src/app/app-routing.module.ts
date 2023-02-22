import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'recipes', component: RecipesComponent},
  // {path: 'makes', component: MakesComponent},
  // {
  //   path: 'user',
  //   component: DashboardComponent,
  //   children: [
  //     // {path: 'dashboard', redirectTo: 'profile'},
  //     {path: 'dashboard', component: DashboardContentComponent},
  //     {path: 'profile', component: ProfileComponent},
  //     {path: 'personal-data', component: PersonalDataComponent},
  //     {path: 'my-recipes', component: MyRecipesComponent},
  //     {path: 'my-makes', component: MyMakesComponent},
  //     {path: 'favorites', component: FavoritesComponent},
  //     {path: 'settings', component: SettingsComponent},
  //     {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
  //   ]
  // },
  // {path: 'contact', component: ContactComponent},
  // {path: '**', component: ErrorComponent},

  { path: '', loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule) },
  // { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
