import { LEADERS } from "./../shared/leaders";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor() {}
  getLeaders() {
    return LEADERS;
  }
  getFeaturedLeader() {
    return LEADERS.find((l) => l.featured);
  }
}
