import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClothesComponent } from './components/clothes/clothes.component';
import { JewelsComponent } from './components/jewels/jewels.component';
import { ElectronicComponent } from './components/electronic/electronic.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NavbarComponent,
        ClothesComponent,
        JewelsComponent,
        ElectronicComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
        
    ]
})
export class AppModule { }
