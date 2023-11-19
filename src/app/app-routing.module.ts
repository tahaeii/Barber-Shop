import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserAccountComponent } from './user-account/user-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: UserComponent },
  { path: 'user', component: UserAccountComponent },

  // { path: '**', component: PageNotFoundComponent },
  //   { path: 'products/:id', component: ProductInfoComponent },
  //   { path: 'products/info', component: ProductInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
