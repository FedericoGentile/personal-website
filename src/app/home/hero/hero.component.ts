import { Component, OnInit } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  words: string[] = ['Aeronautical Engineer', 'Data Analyst/Scientist', 'Python Developer', 'Data Ninja'];
  showIcon: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  word = timer(0, 3000).pipe(
    map((num) => {
      const index = num % this.words.length;
      const word = this.words[index];
      if(this.words[index]=='Data Ninja'){
        this.showIcon = true;
      }
      else{
        this.showIcon = false;
      }
      console.log(word, this.showIcon);
      return word;
    },
    )
  );

   
    

}
