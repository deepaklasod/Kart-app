import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  { path: 'dash', component: DashboardComponent, pathMatch: 'full'},
  { path: 'cal', component: CalculatorComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
