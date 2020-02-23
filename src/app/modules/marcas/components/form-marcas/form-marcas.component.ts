import { Component, OnInit } from '@angular/core';
import { MarcasService } from 'src/app/shared/services/marcas.service';

@Component({
  selector: 'app-form-marcas',
  templateUrl: './form-marcas.component.html',
  styleUrls: ['./form-marcas.component.css']
})
export class FormMarcasComponent implements OnInit {

  onSubmit(form) {
    let dados = JSON.stringify(form.value);
    console.log(dados);
    this.marcaService.add(dados).subscribe(
      marca => {
        console.log(marca);
      },
      err => {
        console.log(err);
      }
    );
    this.all();
  }

  all() {
    let dados = this.marcaService.getAllMarcas();
    console.log(dados);
    return dados;
  }

  constructor(private marcaService: MarcasService) { }

  ngOnInit() {
    this.all();
  }

}
