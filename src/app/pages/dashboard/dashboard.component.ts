import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html' 
  
})
export class dashboard {

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


  allClassWiseTracking=[{"Class":"5th A","Attendance":"1200","Disciline":"1190","Total":"1200"},
            {"Class":"6th A","Attendance":"1300","Disciline":"1190","Total":"1200"},
            {"Class":"7th A","Attendance":"1400","Disciline":"1390","Total":"1300"},
            {"Class":"8th A","Attendance":"1500","Disciline":"1290","Total":"1300"},
            {"Class":"9th A","Attendance":"1600","Disciline":"1390","Total":"1400"}
           ];
  onSelect(schoolId) { 
    this.selectedSchool = null;
    for (var i = 0; i < this.schoolArr.length; i++)
    {
      if (this.schoolArr[i].id == schoolId) {
        this.selectedSchool = this.schoolArr[i];
      }
    }
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

