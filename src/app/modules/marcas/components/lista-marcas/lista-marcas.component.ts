import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Marca } from 'src/app/shared/models/marca.model';
import { MarcasService } from 'src/app/shared/services/marcas.service';

@Component({
  selector: 'app-lista-marcas',
  templateUrl: './lista-marcas.component.html',
  styleUrls: ['./lista-marcas.component.css']
})
export class ListaMarcasComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'usuario', 'id'];
  dataSource: MatTableDataSource<unknown>;

  constructor(private marcaService: MarcasService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.marcaService.all().subscribe(
      req => {
        this.dataSource = new MatTableDataSource(req['data'])
      },
      error => {
        console.log(`Ops, ocorreu um erro de ${error['name']}!`);
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
        this.showMessage(req['message']);
        this.ngOnInit();
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
}

