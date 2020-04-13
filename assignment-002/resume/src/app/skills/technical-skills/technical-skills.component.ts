import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  icon: string;
}


@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})


export class TechnicalSkillsComponent implements OnInit {
  languages: Section[] = [
    {
      name: 'C',
      icon: '../../../assets/icons/c-programming.png',
    },
    {
      name: 'Golang',
      icon: '../../../assets/icons/golang.png',
    },
    {
      name: 'JavaScript',
      icon: '../../../assets/icons/javascript.png',
    },
    {
      name: 'HTML5',
      icon: '../../../assets/icons/html-5.png',
    }
  ];
  Datbases: Section[] = [
    {
      name: 'Postgress',
      icon: '../../../assets/icons/elephant.png',
    },
    {
      name: 'MySql',
      icon: '../../../assets/icons/mysql.png',
    },
    {
      name: 'MongoDB',
      icon: '../../../assets/icons/mongodb.png',
    },
  ];
  Framework: Section[] = [
    {
      name: 'AngularJS',
      icon: '../../../assets/icons/angularjs.png'
    },
    {
      name: 'React JS',
      icon: '../../../assets/icons/react.png'
    },
    {
      name: 'React Native',
      icon: '../../../assets/icons/react-native.png'
    },
    {
      name: 'Node',
      icon: '../../../assets/icons/nodejs.png'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
