import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {FoodType} from "../food-type-class";
import {MenuService} from "../menu.service";
import {RecipeItemComponent} from "./recipe-item.component";
import {Recipe} from "../recipe";


@Component({
  moduleId: module.id,
  selector: 'food-items-list',
  templateUrl: 'food-items-list.component.html',
  directives: [RecipeItemComponent]
})
export class FoodItemsListComponent implements OnInit {
  //selectedType: FoodType;
  //selectedFood: Recipe;
  @Input() foodItems: Recipe[];

  ngOnInit() {

  }

  onClick() {
    //console.log(this.selectedFood);
  }

  onEdit() {

  }

  onDelete() {

  }
}
