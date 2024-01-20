import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Task} from '../../models/Task';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css'
})
export class EditTaskDialogComponent {
  constructor(
    private dialogReference: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string],
    private dataHandler: DataHandlerService,
    private dialog: MatDialog,
  ) {
  }

  private dialogTitle: string | null = null;
  private task: Task | null = null;

  ngOnInit() {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    console.log(this.task);
    console.log(this.dialogTitle);
  }
}

