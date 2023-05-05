import {Component, Inject} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";
import {TodoList} from "../../models/user-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivityListServices} from "../../services/activity-list.services";

const {
  crossIcon,
  titleAddItem,
  labelNameList,
  labelSave,
  ellipseRed,
  ellipseYellow,
  ellipseGreen,
  ellipseBlue,
  ellipsePurple
} = CONSTANTS
@Component({
  selector: 'app-dialog-add-todo-contents',
  templateUrl: './dialog-add-todo-contents.component.html',
  styleUrls: ['./dialog-add-todo-contents.component.scss']
})
export class DialogAddTodoContentsComponent {
  crossIcon: string = crossIcon;
  titleAddItem: string = titleAddItem;
  labelNameList: string = labelNameList;
  labelSave: string = labelSave;
  isOpen = false;
  defaultValue: string = '';
  addTodoList: TodoList = {} as TodoList;

  rangePriority = [{
   color: ellipseRed,
   range: "Very High",
   id: "very-high"
  },{
   color: ellipseYellow,
   range: "High",
   id: "high"
  },{
   color: ellipseGreen,
   range: "Medium",
   id: "normal"
  },{
   color: ellipseBlue,
   range: "Low",
   id: "low"
  },{
   color: ellipsePurple,
   range: "Very Low",
   id: "very-low"
  },]

  selectedOption = this.rangePriority[0];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private activityService: ActivityListServices,
              private dialogRef: MatDialogRef<DialogAddTodoContentsComponent>,) {
  }


  selectItem(item: any) {
    this.addTodoList.priority = item.id;
  }

  onSave() {
    this.addTodoList.priority = this.selectedOption.id;
    const sendData = {
      "title": this.addTodoList.title,
      "activity_group_id": this.data,
      "priority": this.addTodoList.priority
    }

    this.activityService.addTodo(sendData).subscribe(value => {
      if (value) {
        this.dialogRef.close(true)
      }
    });
  }

  onClose() {
    this.dialogRef.close(false);
  }
}
