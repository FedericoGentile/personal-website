import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  age!: number;
  birthday!: Date; // 👈 add this

  constructor() { }

  ngOnInit(): void {
    this.birthday = new Date(1990, 1, 7); // 👈 set it once

    const today = new Date();
    let age = today.getFullYear() - this.birthday.getFullYear();

    const monthDiff = today.getMonth() - this.birthday.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < this.birthday.getDate())
    ) {
      age--;
    }

    this.age = age;
  }

}