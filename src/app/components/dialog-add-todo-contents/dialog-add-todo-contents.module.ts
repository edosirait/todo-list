import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DialogAddTodoContentsComponent} from "./dialog-add-todo-contents.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [DialogAddTodoContentsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
  ],
  exports: [DialogAddTodoContentsComponent]
})

export class DialogAddTodoContentsModulesModule {}
