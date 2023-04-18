import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent implements OnInit {
  categories = ['Clothe', 'Electronics', 'Health']
  constructor() { }

  ngOnInit(): void {
  }

}
