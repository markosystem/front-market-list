import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/shared/models/marca.model';
import { MarcasService } from 'src/app/shared/services/marcas.service';

export interface DialogData {
  marca: Marca;
}

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'usuario', 'id'];
  dataSource: MatTableDataSource<unknown>;
  constructor(private marcaService: MarcasService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.marcaService.all().subscribe(
      req => {
        this.dataSource = new MatTableDataSource(req['data'])
      },
      error => {
        let msg = `Ops, ocorreu um erro de ${error['name']}!`;
        console.log(error);
        console.log(msg);
        this.showMessage(msg);
      }
    );
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  remove(marca: Marca) {
    this.marcaService.delete(marca).subscribe(
      req => {
        this.ngOnInit();
        this.showMessage(req['message']);
      },
      error => {
        console.error(error);
      }
    );
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 4000,
    });
  }

  openDialogRemove(marca: Marca): void {
    const dialogRef = this.dialog.open(DialogRemoveMarca, {
      width: '250px',
      data: { 
        marca: marca 
      }
    });

    dialogRef.afterClosed().subscribe(marca => {
      if (marca != undefined) {
        this.remove(marca);
        this.ngOnInit();
      }
    });
  }
}

@Component({
  selector: 'confirm-remocao',
  templateUrl: 'remove-marca-modal-component.html',
})
export class DialogRemoveMarca {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveMarca>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  cancel(): void {
    this.dialogRef.close();
  }
}

