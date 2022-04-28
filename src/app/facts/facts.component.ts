import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {

  clientcount: number = 0;
  clientcountstop: any = setInterval(()=>{
    this.clientcount++;
    if(this.clientcount == 4){
      clearInterval(this.clientcountstop);
    }
  }, 10)

  projectcount: number = 0;
  projectcountstop: any = setInterval(()=>{
    this.projectcount++;
    if(this.projectcount == 50){
      clearInterval(this.projectcountstop);
    }
  }, 10)

  hourscount: number = 0;
  hourscountstop: any = setInterval(()=>{
    this.hourscount++;
    if(this.hourscount == 120){
      clearInterval(this.hourscountstop);
    }
  }, 1)

  awardscount: number = 0;
  awardscountstop: any = setInterval(()=>{
    this.awardscount++;
    if(this.awardscount == 4){
      clearInterval(this.awardscountstop);
    }
  }, 10)


  constructor() { }

  ngOnInit(): void {
  }

}
