import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentsComponent } from "./comments/comments.component";
import { Routes, RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

const commentsRoutes: Routes = [
  {
    path: "",
    component: CommentsComponent
  }
];

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(commentsRoutes),
    MatButtonModule
  ],
  exports: [RouterModule]
})
export class CommentsModule {}
