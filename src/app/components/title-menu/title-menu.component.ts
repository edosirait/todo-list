import {Component, EventEmitter, Input, Output} from '@angular/core';
import CONSTANTS from "../../constants/app.constants";

const {textBtnTambah, backButton, editButton} = CONSTANTS;
@Component({
  selector: 'app-title-menu',
  templateUrl: './title-menu.component.html',
  styleUrls: ['./title-menu.component.scss']
})
export class TitleMenuComponent {
  textBtnTambah: string = textBtnTambah;
  backButton: string = backButton;
  editButton: string = editButton;

  @Input() isEdit: boolean = false;
  @Input() inputEdit: boolean = false;
  @Input() titleMenu: string = ''
  @Output() clickAdd = new EventEmitter<any>();
  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickBack = new EventEmitter<any>();
  @Output() inputBlur = new EventEmitter<any>();

  onAdd() {
    this.clickAdd.emit();
  }

  onEdit() {
    this.clickEdit.emit();
  }

  onBack() {
    this.clickBack.emit();
  }

  blur() {
    this.inputBlur.emit(this.titleMenu)
  }
}
