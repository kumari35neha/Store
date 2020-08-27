import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './list.component.html',
  
})
export class ListComponent implements OnInit {
  home: any;


  constructor() { }

  ngOnInit() {
    this.home=[
      {
        "code":"001",
        "Name": "HCL"
      },{
        "code":"002",
        "Name":"TCS"
      },{
        "code":"003",
        "Name":"Nokia"
      }
    ];
  }
}
