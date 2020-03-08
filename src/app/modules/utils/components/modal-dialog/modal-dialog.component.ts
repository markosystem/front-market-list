import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: '';
  description: '';
  icon_button: '';
  color_button: '';
}

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: []
})
export class ModalDialogComponent {
  @Input()
  title: string = 'Atenção!';
  @Input()
  description: string = 'Informe a Descrição aqui!';
  @Input()
  icon_button: string = 'visibility';
  @Input()
  color_button: string = 'primary';

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ShowDialogOverview, {
      width: '50%',
      data: {
        title: this.title,
        description: this.description
      }
    });
  }
}

@Component({
  selector: 'app-modal-show',
  templateUrl: 'modal-dialog.component-dialog.html',
})
export class ShowDialogOverview {
  constructor(
    public dialogRef: MatDialogRef<ShowDialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}