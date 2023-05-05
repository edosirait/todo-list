import {Component, Inject} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";
import {ActivityList} from "../../models/user-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

const {alertIcon, deleteQuestion, btnCancel, btnDelete} = CONSTANTS;
@Component({
  selector: 'app-dialog-delete-contents',
  templateUrl: './dialog-delete-contents.component.html',
  styleUrls: ['./dialog-delete-contents.component.scss']
})
export class DialogDeleteContentsComponent {
  alertIcon: string = alertIcon;
  deleteQuestion: string = deleteQuestion;
  btnCancel: string = btnCancel;
  btnDelete: string = btnDelete;

  message = '';

  dataUser: ActivityList = {} as ActivityList

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private dialogRef: MatDialogRef<DialogDeleteContentsComponent>,
    ) {
      this.message = data ? data.message : '';
    }


  onCancel() {
    this.dialogRef.close(false);
  }

  onDelete() {
    this.dialogRef.close(true)
  }
}
