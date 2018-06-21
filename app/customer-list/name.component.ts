import { Component, Input, OnInit } from '@angular/core';

import { Name } from './model';
import { DataService } from './data.service';

@Component({
  moduleId: module.id,
  selector: 'my-name',
  templateUrl: 'name.component.html'
})
export class NameComponent implements OnInit {
  @Input() name: Name;

  // regions = ['East', 'Midwest', 'North', 'South', 'West'];
  // states: string[];
  // states    = ['California', 'Illinois', 'Jalisco', 'Quebec'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getStates()
    //   .subscribe(states => this.states = states);
  }
}
