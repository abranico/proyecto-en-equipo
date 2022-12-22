import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { HomeComponent } from './components/home/home.component';
>>>>>>> tomas

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    HomeComponent
>>>>>>> tomas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    HttpClientModule
>>>>>>> tomas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
