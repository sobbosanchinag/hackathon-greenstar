import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataTableModule} from "angular-6-datatable";
import { shareReplay } from 'rxjs/operators';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
import {AuthguardGuard} from './authguard.guard';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import {MatExpansionModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StarChartComponent } from './star-chart/star-chart.component';


const appRoutes:Routes=[
  {
    path:'',
    component:LoginComponent
},
{
   path:'dashboard',
   canActivate:[AuthguardGuard],
   component:DashboardComponent
 },
 {
   path:'registration',
   component:RegistrationComponent
 },
 {
   path:'forgotPwd',
   component:ForgotPasswordComponent
 }

]
@NgModule({
  declarations: [
    AppComponent,DashboardComponent, LoginComponent, HeaderComponent, FooterComponent, RegistrationComponent, ForgotPasswordComponent, StarChartComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpModule,
    HttpClientModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule
  ],
  providers: [AuthServiceService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
