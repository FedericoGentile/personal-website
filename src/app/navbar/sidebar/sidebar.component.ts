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

}
