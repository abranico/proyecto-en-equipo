import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothesComponent } from './components/clothes/clothes.component';
import { ElectronicComponent } from './components/electronic/electronic.component';
import { HomeComponent } from './components/home/home.component';
import { JewelsComponent } from './components/jewels/jewels.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'all', component:HomeComponent},
  {path:'clothes',component:ClothesComponent},
  {path:'jewels',component:JewelsComponent},
  {path:'electronic',component:ElectronicComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
