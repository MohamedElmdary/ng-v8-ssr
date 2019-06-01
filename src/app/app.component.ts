import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ul>
      <li>
        <a routerLink="/todos">todos</a>
      </li>
      <li>
        <a routerLink="/comments">comments</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
