import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() public symbol: any;

  constructor() { }

  ngOnInit(): void {
  }
  toHero(){
    document.getElementById("hero")?.scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior:"smooth"});
  }
  toResume(){
    document.getElementById("resume")?.scrollIntoView({behavior:"smooth"});
  }
  toPortfolio(){
    document.getElementById("portfolio")?.scrollIntoView({behavior:"smooth"});
  }
  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  }

}