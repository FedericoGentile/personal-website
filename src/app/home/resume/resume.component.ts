import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/docs/cv_federico_gentile.pdf');
    link.setAttribute('download', 'cv_federico_gentile.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
