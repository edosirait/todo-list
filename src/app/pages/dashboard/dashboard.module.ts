import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {HeaderModule} from "../../components/header/header.module";
import {TitleMenuModule} from "../../components/title-menu/title-menu.module";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    TitleMenuModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [DashboardComponent]
})

export class DashboardModule {}
