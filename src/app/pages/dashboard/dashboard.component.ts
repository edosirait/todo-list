import {Component, OnInit} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";
import {ActivityListServices} from "../../services/activity-list.services";
import {ActivityList, TodoList, UserModel} from "../../models/user-model";
import {MatDialog} from "@angular/material/dialog";
import {DialogDeleteContentsComponent} from "../../components/dialog-delete-contents/dialog-delete-contents.component";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

const {titleHeader, titleMenu, logoEmptyState, deleteIcon} = CONSTANTS;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  titleHeader: string = titleHeader;
  titleMenu: string = titleMenu;
  logoEmptyState: string = logoEmptyState;
  deleteIcon: string = deleteIcon;

  dataUser: UserModel = {} as UserModel;
  listActivity: ActivityList[] = [];
  todoList: TodoList = {} as TodoList;

    constructor(private activityListService: ActivityListServices,
              private dialog: MatDialog,
              private router: Router,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.activityList();
  }

  activityList() {
    this.activityListService.getListActivity().subscribe(val => {
      this.listActivity = val.data;
    })
  }

  onAdd() {
    this.dataUser.email = 'edo.sirait25@gmail.com'
    this.dataUser.title = 'New Activity'
    this.activityListService.addListActivity(this.dataUser).subscribe(value => {
      if (value) {
        this.activityList();
      }
    })
  }

  onClickContent(id: number) {
    this.router.navigate(['detail' + '/' + id]);
  }

  onDelete(id: number) {
    this.deleteDialog(id);
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteContentsComponent);

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.deleteAction(id);
        }
    });
  }

  deleteAction(id: number) {
    this.activityListService.deleteListActivity(id).subscribe(value => {
      if (value) {
        this.activityList();
        this._snackBar.open('Activity Berhasil dihapus', '', {
          duration: 1500,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    })
  }

}
