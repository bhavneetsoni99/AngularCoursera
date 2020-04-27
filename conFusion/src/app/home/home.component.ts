import { Dish } from "./../shared/dish";
import { LeaderService } from "./../services/leader.service";
import { DishService } from "./../services/dish.service";
import { Component, OnInit } from "@angular/core";
import { Leader } from "../shared/leader";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  featuredDish: Dish;
  featuredLeader: Leader;

  constructor(
    private dishService: DishService,
    private leaderService: LeaderService
  ) {}

  ngOnInit(): void {
    this.featuredDish = this.dishService.getDish("1");
    this.featuredLeader = this.leaderService.getFeaturedLeader();
  }
}
