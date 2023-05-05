import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailListComponent} from "./detail-list.component";

const routes: Routes = [
  {
    path: '',
    component: DetailListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailListRoutingModule {}
