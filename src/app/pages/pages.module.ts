import { NgModule } from '@angular/core';

// Pages
import { HomeComponent } from '../pages/home/home.component';
import { RecipesComponent } from '../pages/recipes/recipes.component';
import { MakesComponent } from '../pages/makes/makes.component';
import { ContactComponent } from '../pages/contact/contact.component';
// Error page
import { ErrorComponent } from '../pages/error/error.component';

// Modules
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // Pages
    HomeComponent,
    RecipesComponent,
    MakesComponent,
    ContactComponent,
    // Error page
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UserModule,
  ],
  exports: [
    // Pages
    HomeComponent,
    RecipesComponent,
    MakesComponent,
    ContactComponent,
    // Error page
    ErrorComponent,
    // Modules
    UserModule,
  ],
})
export class PagesModule { }
