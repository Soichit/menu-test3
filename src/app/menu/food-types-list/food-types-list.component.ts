import { Component, OnInit } from '@angular/core';
import {FoodType} from "../food-type-class";
import {MenuService} from "../menu.service";
import {FoodItemsListComponent} from "../food-items-list/food-items-list.component";

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';


@Component({
  moduleId: module.id,
  selector: 'food-types-list',
  templateUrl: 'food-types-list.component.html',
  directives: [FoodItemsListComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})


export class FoodTypesListComponent implements OnInit {
  //recipes: Recipe[] = [];
  foodTypes: FoodType[] = [];
  selectedIndex: number;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.foodTypes = this.menuService.getAllTypes();
  }

  onSelectedType(i: number) {
    if (this.selectedIndex === i) {
      this.selectedIndex = undefined;
    } else {
      this.selectedIndex = i;
    }
    //console.log(this.selectedIndex);
  }
}