"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var menu_service_1 = require("../menu.service");
var food_items_list_component_1 = require("../food-items-list/food-items-list.component");
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var FoodTypesListComponent = (function () {
    function FoodTypesListComponent(menuService) {
        this.menuService = menuService;
        //recipes: Recipe[] = [];
        this.foodTypes = [];
    }
    FoodTypesListComponent.prototype.ngOnInit = function () {
        this.foodTypes = this.menuService.getAllTypes();
    };
    FoodTypesListComponent.prototype.onSelectedType = function (i) {
        if (this.selectedIndex === i) {
            this.selectedIndex = undefined;
        }
        else {
            this.selectedIndex = i;
        }
        //console.log(this.selectedIndex);
    };
    FoodTypesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'food-types-list',
            templateUrl: 'food-types-list.component.html',
            directives: [food_items_list_component_1.FoodItemsListComponent, card_1.MD_CARD_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [menu_service_1.MenuService])
    ], FoodTypesListComponent);
    return FoodTypesListComponent;
}());
exports.FoodTypesListComponent = FoodTypesListComponent;
//# sourceMappingURL=food-types-list.component.js.map