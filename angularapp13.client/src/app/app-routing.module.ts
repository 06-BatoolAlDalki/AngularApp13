import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  { path: "loginAli", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  {path  : "category" , component : CategoryComponent},
  {path  : "product/:id" , component : ProductComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
