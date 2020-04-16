import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Módulo Front End - Politécnico Grancolombiano - 2019';
  }

  ngOnInit() {
  }

}
