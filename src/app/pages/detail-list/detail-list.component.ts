import {Component, OnInit} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";
import {ActivatedRoute, Router} from "@angular/router";
import {TodoList} from "../../models/user-model";
import {ActivityListServices} from "../../services/activity-list.services";
import {DialogDeleteContentsComponent} from "../../components/dialog-delete-contents/dialog-delete-contents.component";
import {MatDialog} from "@angular/material/dialog";
import {
  DialogAddTodoContentsComponent,
} from "../../components/dialog-add-todo-contents/dialog-add-todo-contents.component";

const {
  titleHeader,
  logoTodoEmptyState,
  deleteIcon,
  ellipseRed,
  ellipseYellow,
  ellipseGreen,
  ellipseBlue,
  ellipsePurple
} = CONSTANTS;
@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit{
  outsideClick: boolean = false;
  titleHeader: string = titleHeader;
  deleteIcon: string = deleteIcon;
  logoTodoEmptyState: string = logoTodoEmptyState;
  todoList: TodoList = {} as TodoList;
  id: string = '';
  inputEdit: boolean = false;
  ellipseRed: string = ellipseRed;
  ellipseYellow: string = ellipseYellow;
  ellipseGreen: string = ellipseGreen;
  ellipseBlue: string = ellipseBlue;
  ellipsePurple: string = ellipsePurple;

  constructor(private activityListService: ActivityListServices,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog,) {
  }

  ngOnInit() {
    this.id =  this.activatedRoute.snapshot.params['id'];
    this.getDetailTodoList();
  }

  getDetailTodoList() {
    const id = Number(this.id);
    this.activityListService.getDetailList(id).subscribe((value: TodoList) => {
      if (value) {
        this.todoList = value;
      }
    })
  }

  onAdd() {
    this.addTodoDialog();
  }

  onEdit() {
    this.inputEdit = !this.inputEdit

    if (!this.inputEdit) {
      const id = Number(this.id)
      this.editTitleTodoList(id, this.titleHeader);
    }
  }

  onBack() {
    this.router.navigate(['']);
  }

  inputBlur(data: any) {
    this.inputEdit = false;
    this.titleHeader = data
    const id = Number(this.id)
    this.editTitleTodoList(id, data);
  }

  editTitleTodoList(id: number, data: any) {
    this.activityListService.editTitleTodoList(id, data).subscribe(value => {
      console.log('vale', value)
    })
  }

  addTodoDialog() {
    const dialogRef = this.dialog.open(DialogAddTodoContentsComponent, {
        data: this.id
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getDetailTodoList();
      }
    });
  }

  deleteDialog(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteContentsComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteTodoList(id);
      }
    });
  }

  deleteTodoList(id: number) {
    this.activityListService.deleteTodoList(id).subscribe(value => {
      if (value) {
        this.getDetailTodoList();
      }
    });
  }
}
