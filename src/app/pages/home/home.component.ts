import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  cols = 3;
  constructor() { }

  ngOnInit(): void { }
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
  }
}
