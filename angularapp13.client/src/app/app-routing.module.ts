import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: "loginAli", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  {path  : "category" , component : CategoryComponent},
  { path: "product/:id", component: ProductComponent },
  { path: "signUp", component: RegistrationComponent },
  {path : "signIn" , component : LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
