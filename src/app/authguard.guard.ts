import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{

  constructor(private authService:AuthServiceService){

  }
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getUserLoggedIn();
  }
  
}
