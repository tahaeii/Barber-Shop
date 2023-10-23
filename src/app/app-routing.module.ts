import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'user' , component:UserComponent}
];
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'products', component: ProductListComponent },
//   { path: 'products/:id', component: ProductInfoComponent },
//   { path: 'products/info', component: ProductInfoComponent },
//   {
//     path: 'categories', component: CategoryListComponent, children: [
//       { path: 'features', component: CategoryFeaturesComponent },
//       { path: 'colors', component: CategoryColorsComponent },
//       { path: '', redirectTo: 'features', pathMatch: 'full' }
//     ]
//   },
//   { path: '**', component: PageNotFoundComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
