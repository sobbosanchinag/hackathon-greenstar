import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-star-chart',
  templateUrl: './star-chart.component.html',
  styleUrls: ['./star-chart.component.css']
})
export class StarChartComponent implements OnInit {

  individualStarDataMap:any[]=[];

  constructor(private router:Router,private authService:AuthServiceService) { }

  ngOnInit() {
  }

  getIndividualStarData(){
    
          //using dummy data
          this.authService.getIndividualStarData().map(individualStar=>{
    
            console.log("Individual Star Data >>>>> " + individualStar);
            this.individualStarDataMap.push(individualStar);
          });
  }
}
