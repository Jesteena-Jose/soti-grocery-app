import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductMainPageComponent } from './components/product-main-page/product-main-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomePageComponent},
  {path:'products/sub/:catId/:subId',component:ProductsPageComponent,canActivate:[AuthGuard]},
  {path:'products/:catId',component:ProductsPageComponent,canActivate:[AuthGuard]},
  {path:'about',component:AboutPageComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactPageComponent,canActivate:[AuthGuard]},
  {path:'products/detail/:Id',component:ProductDetailPageComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterPageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'**',component:ErrorPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
