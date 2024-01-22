import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {Task} from '../../models/Task';
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {FormsModule, NgModel} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    FormsModule,
    MatFormField,
    MatIcon,
    MatDialogActions,
    MatButton,
    MatInput,
    MatDialogTitle,
    MatLabel,
    NgIf,
    MatIconButton,
    MatSuffix
  ],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent implements OnInit {

  protected dialogTitle: string | null = null;
  protected task: Task = {} as Task;
  protected tmpTitle: string = '' as string;

  constructor(
    private dialogReference: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string]
  ) {
  }

  ngOnInit(): void {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    this.tmpTitle = this.task.title;
  }

  onConfirm(): void {
    this.task.title = this.tmpTitle;
    this.dialogReference.close(this.task);
  }

  onCancel(): void {
    this.dialogReference.close(null);
  }
}
