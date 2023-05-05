import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TitleMenuComponent} from "./title-menu.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TitleMenuComponent],
    imports: [CommonModule, MatIconModule, MatButtonModule, FormsModule],
  exports: [TitleMenuComponent]
})

export class TitleMenuModule {}
