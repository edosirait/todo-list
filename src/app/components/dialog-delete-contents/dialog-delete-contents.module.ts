import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DialogDeleteContentsComponent} from "./dialog-delete-contents.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [DialogDeleteContentsComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  exports: [DialogDeleteContentsComponent]
})

export class DialogDeleteContentsModule {}
