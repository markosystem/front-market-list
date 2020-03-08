import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalDialogComponent, ShowDialogOverview } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    ModalDialogComponent,
    ShowDialogOverview
  ],
  exports: [
    ModalDialogComponent,
    ShowDialogOverview
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ModalDialogModule { }
