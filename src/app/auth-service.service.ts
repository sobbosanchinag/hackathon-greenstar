import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

interface udata {
  success : string
}

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private isUserLoggedIn;
  userLoginData:any = [];
  baseUrl:string ='http://localhost:8083/userService/';
  
  constructor(private httpClient : HttpClient) {
    this.isUserLoggedIn=false;
   }


   getClassWiseDetails(){
     //uncomment when invoke orginal service
    //return this.httpClient.get(this.baseUrl + '/classWise');

    return this.allClassWiseTracking;

    }
    getTeamWiseDetails(){
      //uncomment when invoke orginal service
     // return this.httpClient.get(this.baseUrl + '/teamWise');

      return this.teamWiseTracking;
      }
    getIndividualWiseDetails(){
      //uncomment when invoke orginal service
      //  return this.httpClient.get(this.baseUrl + '/individualWise');

      return this.individualTracking;
    }

    getIndividualStarData(){
      return this.individualStarData;
    }


    //use when invoke orginal service
   public login(credentials) {
      
    // if (credentials.userName === null || credentials.password === null) {
    //   return Observable.throw("Please insert credentials");
    // } else {
    //   return Observable.create(observer => {
    //      var headers = new Headers();
    //      headers.append('Content-Type', 'application/json');
    //      let options = new RequestOptions({ headers: headers });
       return  this.httpClient.post<udata>(this.baseUrl+"getuser", credentials)
        //     .catch((error): any => {
        //       console.log('************* ERROR Response', error);
        //       console.log("----------------------end error")
        //     observer.next(error.status);
        //    return Observable.empty();
                        
        //   })
        //  .subscribe(data => {
        //      if(data){
        //       // console.log('All: ' + JSON.stringify(data));
        //          console.log('raw data '+ data);
                // var json=JSON.stringify(data);
                  // this.userLoginData.push();
                  //  observer.next(this.userLoginData);
                  //  observer.complete();
                  
      //           }
      //           else{
      //             return Observable.of(false);
      //           }
      //       })
           
      // });
  //  }
  }

  
  allClassWiseTracking=[{"Class":"5th A","Attendance":"120","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"6th A","Attendance":"130","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"7th A","Attendance":"140","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"8th A","Attendance":"150","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"9th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"9th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"10th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"11th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"12th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"},
            {"Class":"12th A","Attendance":"160","Discipline":"119","Homework":"118","Total":"1200","Chart":"chart"}
           ];

  teamWiseTracking=[{"ClassToppers":"Strawberry","Attendance":"120","Discipline":"119","Homework":"118","Total":"120","Chart":"chart"},
  {"ClassToppers":"Apple","Attendance":"120","Discipline":"119","Homework":"118","Total":"120","Chart":"chart"},
  {"ClassToppers":"Mango","Attendance":"120","Discipline":"119","Homework":"118","Total":"120","Chart":"chart"},
  {"ClassToppers":"Guava","Attendance":"120","Discipline":"119","Homework":"118","Total":"120","Chart":"chart"},
  {"ClassToppers":"Banana","Attendance":"120","Discipline":"119","Homework":"118","Total":"120","Chart":"chart"}
          ];

  individualTracking=[{"RollNo":"1000","Name":"A","Caste":"GN","Attendance":"1200", "Discipline":"1000","Homework":"1100","WeekSummary":"800","Chart":"chart"},
  {"RollNo":"1001","Name":"B","Caste":"GN","Attendance":"1200", "Discipline":"1000","Homework":"1100","WeekSummary":"800","Chart":"chart"},
  {"RollNo":"1002","Name":"C","Caste":"OBC","Attendance":"1200", "Discipline":"1000","Homework":"1100","WeekSummary":"800","Chart":"chart"},
  {"RollNo":"1003","Name":"D","Caste":"SC","Attendance":"1200", "Discipline":"1000","Homework":"1100","WeekSummary":"800","Chart":"chart"},
  {"RollNo":"1004","Name":"E","Caste":"ST","Attendance":"1200", "Discipline":"1000","Homework":"1100","WeekSummary":"800","Chart":"chart"}
         ];

  individualStarData=[{"D1":"1","D2":"1","D3":"3","D4":"2","D5":"3","D6":"2","D7":"4","D8":"3","D9":"2","D10":"1","D11":"1","D12":"1","D13":"3","D14":"2","D15":"3","D16":"2","D17":"4","D18":"3","D19":"2","D20":"1","D21":"1","D22":"1","D23":"3","D24":"2","D25":"3","D26":"2","D27":"4","D28":"3","D29":"2","D30":"1","D31":"1"},
  {"D1":"1","D2":"1","D3":"3","D4":"2","D5":"3","D6":"2","D7":"4","D8":"3","D9":"2","D10":"1","D11":"1","D12":"1","D13":"3","D14":"2","D15":"3","D16":"2","D17":"4","D18":"3","D19":"2","D20":"1","D21":"1","D22":"1","D23":"3","D24":"2","D25":"3","D26":"2","D27":"4","D28":"3","D29":"2","D30":"1","D31":"1"},
  {"D1":"1","D2":"1","D3":"3","D4":"2","D5":"3","D6":"2","D7":"4","D8":"3","D9":"2","D10":"1","D11":"1","D12":"1","D13":"3","D14":"2","D15":"3","D16":"2","D17":"4","D18":"3","D19":"2","D20":"1","D21":"1","D22":"1","D23":"3","D24":"2","D25":"3","D26":"2","D27":"4","D28":"3","D29":"2","D30":"1","D31":"1"}
];


















   setUseLoggedIn(){
    this.isUserLoggedIn=true;
   }

   getUserLoggedIn(){

    return this.isUserLoggedIn;
   }
}
