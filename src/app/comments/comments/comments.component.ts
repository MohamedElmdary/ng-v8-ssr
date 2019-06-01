import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-comments",
  template: `
    <button mat-button color="primary">
      test material
    </button>
    {{ data | json }}
  `
})
export class CommentsComponent implements OnInit {
  data: any;
  constructor(private readonly http: HttpClient) {}

  public ngOnInit(): void {
    this.http
      .get("https://jsonplaceholder.typicode.com/comments")
      .subscribe(data => (this.data = data));
  }
}
