import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import {DashboardComponent} from '../dashboard/dashboard.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private data:any;
  constructor(private router:Router,private authService:AuthServiceService) {



   }

  ngOnInit() {
  }

  credentials={userName:'',password:''};
  formSubmit(){
    console.log(this.credentials);
    // if(this.credentials.username='admin'){
    //    this.authService.setUseLoggedIn();
    //   this.router.navigate(['dashboard']);
     
    // }

    this.getAuthenticateUsersInfo(this.credentials);
  }

  //use when call orginal service
  getAuthenticateUsersInfo(credentials){

    
   this.authService.login(this.credentials).subscribe(allowed => {
       
       if (allowed) {  
        

  //console.log("happy path : "+allowed['success']);
    //var obj = JSON.parse(allowed);
    console.log("json success"+allowed.success);
        //  let success = allowed['success'];
        //  console.log('in login '+success);  
        //  if (allowed == 500) {
        //    // handle based on ur requiremtn........
                    
        //    }
            if(allowed.success === "true") {
            console.log('************* logged in'+this.authService.userLoginData);
            this.authService.setUseLoggedIn();
            this.router.navigate(['dashboard']);
                  
           }
        } 
      },
        error => {
         
          //this.showError("UnAuthorized Access");
        // this.showError(error);
        });
         
 }

}
