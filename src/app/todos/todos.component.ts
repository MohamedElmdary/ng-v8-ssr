import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-todos",
  template: `
    {{ data | json }}
  `
})
export class TodosComponent implements OnInit {
  data: any;
  constructor(private readonly http: HttpClient) {}

  public ngOnInit(): void {
    this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(data => (this.data = data));
  }
}
