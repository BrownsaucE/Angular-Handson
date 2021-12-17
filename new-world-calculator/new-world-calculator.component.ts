import { Component, OnInit } from '@angular/core';

import { GreenWood } from './greenWood';
import { Timber } from './timber';
import { Lumber } from './lumber';
import { Wyrdwood } from './wyrdwood';
import { WyrdwoodPlanks } from './wrydwood-planks';

@Component({
  selector: 'app-new-world-calculator',
  templateUrl: './new-world-calculator.component.html',
  styleUrls: ['./new-world-calculator.component.css']
})
export class NewWorldCalculatorComponent implements OnInit {
  greenWood:GreenWood = { number:1 };
  wrydwood:Wyrdwood = { number:1 };

  timber:Timber = { greenWood:4, number:1 };
  lumber:Lumber = { agedWood:4, timber:2, sandpaper:1, number:1 };
  wrydwoodPlanks:WyrdwoodPlanks = { wyrdwood:6, lumber:2, sandpaper:1, number:1 };
  

  noOfPlanks:number = 0;
  noOfLumber:number = 0;
  noOfTimber:number = 0;
  noOfGreenWood:number = 0;
  noOfSandpaper:number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  calculate(){
    this.noOfPlanks = Math.floor(this.wrydwood.number/6);
    this.noOfLumber = this.noOfPlanks * this.wrydwoodPlanks.lumber;
    this.noOfTimber = this.noOfLumber * this.lumber.timber;
    this.noOfGreenWood = this.noOfTimber * this.timber.greenWood;
  }
}
