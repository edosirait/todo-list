import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HeaderModule} from "../../components/header/header.module";
import {TitleMenuModule} from "../../components/title-menu/title-menu.module";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {DetailListComponent} from "./detail-list.component";
import {DetailListRoutingModule} from "./detail-list-routing.module";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [DetailListComponent],
  imports: [
    CommonModule,
    DetailListRoutingModule,
    HeaderModule,
    TitleMenuModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule
  ],
  exports: [DetailListComponent]
})

export class DetailListModule {}
