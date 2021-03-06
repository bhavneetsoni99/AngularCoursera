import { DishService } from "./../services/dish.service";
import { Component, OnInit } from "@angular/core";
import { Dish } from "./../shared/dish";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(private dishService: DishService) {}
  dishes: Dish[];
  selectedDish: Dish;

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
