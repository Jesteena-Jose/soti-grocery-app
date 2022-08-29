import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { SubcatComponent } from './components/subcat/subcat.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductMainPageComponent } from './components/product-main-page/product-main-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductsPageComponent,
    ProductDetailPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    SubcatComponent,
    ErrorPageComponent,
    ProductMainPageComponent,
    RegisterPageComponent,
    LoginPageComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
