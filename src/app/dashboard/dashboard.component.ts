import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allClassWiseTracking:any[]=[];
  teamWiseTracking:any[]=[];
  individualTracking:any[]=[];
  show= false;

  constructor(private router:Router,private authService:AuthServiceService) {
   
  }

  ngOnInit() {
  }
  title = 'schoolProjects';
  //allClassWiseTracking:any[]=[];
  //allTeamWiseTracking:any[]=[];
  //allIndividualWiseTracking:any[]=[];
  selectedSchool:School = new School(5, 'Modern High School','','');
  
  schoolArr = [
     new School(-1, 'Please select',"","" ),
     new School(1, 'ModernSchool',"Jadabpur","987461512" ),
     new School(2, 'PathBhaban','JodhpurPark','8765432' ),
     new School(3, 'SantoshpurVidyamandir','Baghajatin','0332456' ),
     new School(4, 'RamakrishnaMission','Ballyganj','8764563')
  ];


  onSelect(schoolId) {
    
    this.selectedSchool = null;
    for (var i = 0; i < this.schoolArr.length; i++)
    {
      if (this.schoolArr[i].id == schoolId) {
        this.selectedSchool = this.schoolArr[i];
      }
    }
    if(schoolId!=-1){
      this.show=true;
      this.getClassWiseDetails();
      this.getTeamWiseDetails();
      this.getIndividualWiseDetails();

    }else{
      this.show=false;
    }
}


getClassWiseDetails(){

  // Code uncomment when  actual service invoke
   /*this.authService.getClassWiseDetails()
    .catch((error): any => {
     console.log('************* ERROR Response', error);
    })
    .subscribe(allowed => {
       if (allowed) {     
         console.log("class wise details log---->>>>>>"+allowed);
          this.allClassWiseTracking=allowed;
              
         }
      }); */

      //Using Dummy data
      this.authService.getClassWiseDetails().map(classwise=>{
        
        var json=JSON.stringify(classwise);
       // alert("classwise--->>>>>>"+json);
        console.log("class wise details log---->>>>>>"+classwise);
        this.allClassWiseTracking.push(classwise);
               
      });
     
  }

    getTeamWiseDetails(){

      // Code uncomment when  actual service invoke
     /* this.authService.getTeamWiseDetails()
       .catch((error): any => {
        console.log('************* ERROR Response', error);
       })
       .subscribe(allowed => {
          if (allowed) {     
            console.log("class wise details log---->>>>>>"+allowed);
             this.teamWiseTracking=allowed;
                 
            }
         }); */

          //Using Dummy data
         this.authService.getTeamWiseDetails().map(teamwise=>{

          console.log("class wise details log---->>>>>>"+teamwise);
          this.teamWiseTracking.push(teamwise);
                 
        });

         
    }

       getIndividualWiseDetails(){

      // Code uncomment when  actual service invoke
        /* this.authService.getIndividualWiseDetails()
         .catch((error): any => {
          console.log('************* ERROR Response', error);
         })
         .subscribe(allowed => {
            if (allowed) {     
              console.log("class wise details log---->>>>>>"+allowed);
               this.individualTracking=allowed;
                   
              }
           }); */

            //Using Dummy data
         this.authService.getIndividualWiseDetails().map(individualWise=>{

          console.log("class wise details log---->>>>>>"+individualWise);
          this.individualTracking.push(individualWise);
                 
        });


     }

}



export class School
{
    constructor(id:number, name:string,address:string,contact:string) {
        this.id=id;
        this.name=name;
        this.address=address;
        this.contact=contact;
    }

    id:number;
    name:string;
    address:string;
    contact:string;
}


