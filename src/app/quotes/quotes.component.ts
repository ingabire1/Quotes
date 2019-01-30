import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Quote } from "../quote";
import { isListLikeIterable } from "@angular/core/src/change_detection/change_detection_util";
@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css/s.component.css"]
})
export class QuotsComponent implements OnInit {
  // isComplete = false;
  Quotes = [
    new Quote(
      1,
      "Watch Finding Nemo",
      "Find an online version and watch merlin find his son",
      new Date(2018, 3, 14)
    ),
    new Quote(
      2,
      "Buy Cookies",
      "I have to buy cookies for the parrot",
      new Date(2018, 6, 9)
    ),
    new Quote(
      3,
      "Get new Phone Case",
      "Diana has her birthday coming up soon",
      new Date(2018, 1, 12)
    ),
    new Quote(
      4,
      "Get Dog Food",
      "Pupper likes expensive sancks",
      new Date(2018, 0, 18)
    ),
    new Quote(5, "Solve math homework", "Damn Math", new Date(2018, 2, 14)),
    new Quote(
      6,
      "Plot my world domination plan",
      "Cause I am an evil overlord",
      new Date(2018, 3, 14)
    )
  ];

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  public upvote: number = 0;
  isLiked(upvote) {
    this.upvote += 1;
  }
  public downvote: number = 0;
  isDisLiked(upvote) {
    this.upvote -= 1;
  }
  constructor() {}
  ngOnInit() {}
}
