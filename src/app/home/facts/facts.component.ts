import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  countrycount: number = 0;
  countrycountstop: any = setInterval(()=>{
    this.countrycount++;
    if(this.countrycount == 4){
      clearInterval(this.countrycountstop);
    }
  }, 10)

  subscribercount: number = 0;
  subscribercountstop: any = setInterval(()=>{
    this.subscribercount++;
    if(this.subscribercount == 600){
      clearInterval(this.subscribercountstop);
    }
  }, 1)

  patentcount: number = 0;
  patentcountstop: any = setInterval(()=>{
    this.patentcount++;
    if(this.patentcount == 1){
      clearInterval(this.patentcountstop);
    }
  }, 1)

  awardscount: number = 0;
  awardscountstop: any = setInterval(()=>{
    this.awardscount++;
    if(this.awardscount == 4){
      clearInterval(this.awardscountstop);
    }
  }, 40)


  constructor() { }

  ngOnInit(): void {
  }

}
