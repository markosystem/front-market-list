import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Marca } from 'src/app/shared/models/marca.model';
import { MarcasService } from 'src/app/shared/services/marcas.service';

@Component({
  selector: 'app-form-marcas',
  templateUrl: './form-marcas.component.html',
  styleUrls: ['./form-marcas.component.css']
})
export class FormMarcasComponent implements OnInit {
  id: string;
  entity: Marca = new Marca();
  msg: string = '';

  constructor(private marcaService: MarcasService, private route: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router) {
    this.route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit() {
    if (this.id) {
      this.marcaService.get(this.id).subscribe(
        req => {
          this.entity = req['data']
        },
        error => {
          this.showMessage('Houve um erro ao obter a Entidade!');
          console.error(error);
        }
      );
      return;
    }
    this.entity.usuario = '5e3f65b1d40e0109fee573bf'
  }

  onSubmit() {
    if (this.id == null) {
      this.add();
      return;
    }
    this.update();
  }

  add() {
    this.marcaService.save(this.entity).subscribe(
      req => {
        this.id = req['data'].id;
        this.router.navigate([`/marcas/form/${this.id}`]);
        this.showMessage(`${req['message']}`);
      },
      error => {
        this.msg = `Ops, ocorreu um erro de ${error['name']}!`;
        console.error(error);
        this.showMessage(this.msg);
      }
    );
  }

  update() {
    this.marcaService.update(this.entity).subscribe(
      req => {
        this.showMessage(`${req['message']}`);
      },
      error => {
        this.msg = `Ops, ocorreu um erro de ${error['name']}!`;
        console.error(error);
        this.showMessage(this.msg);
      }
    );
  }

  showMessage(message: string) {
    this._snackBar.open(message, 'Fechar', {
      duration: 4000,
    });
  }

}
