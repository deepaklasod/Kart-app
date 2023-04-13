import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component'

const routes: Routes = [
  { path: 'cal', component: CalculatorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalculatorComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   {path: 'cal', component: CalculatorComponent},
      
    //   // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    // ]),
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
