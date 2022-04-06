import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Idioma } from 'src/app/model/idioma.model';
import { IdiomaService } from 'src/app/services/idioma.service';
import { FormIdiomaComponent } from './form-idioma/form-idioma.component';

@Component({
  selector: 'app-persona-idiomas',
  templateUrl: './persona-idiomas.component.html',
  styleUrls: ['./persona-idiomas.component.css']
})
export class PersonaIdiomasComponent implements OnInit {

  @ViewChild("formIdioma") formIdioma!: FormIdiomaComponent;
  @Input() idiomas: Idioma[] = [];

  constructor(private idiomaService: IdiomaService){ }

  ngOnInit(): void {
  }

  crearNuevaIdioma(idioma: Idioma) {
    if (idioma.id) {
      this.idiomaService.editarIdioma(idioma).subscribe((idiomaEditada) => {
        this.actualizarPrimeraIdioma(idiomaEditada);
      });
    } else {
      this.idiomaService
        .nuevaIdioma(idioma)
        .subscribe((nuevaidioma) => this.idiomas.push(nuevaidioma));
    }
  }

  borrarIdioma(id: number) {
    this.idiomaService.borrarIdioma(id).subscribe(() => {
      this.idiomas = this.idiomas.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraIdioma(idioma: Idioma) {
    for (let index = 0; index < this.idiomas.length; index++) {
      if (this.idiomas[index].id === idioma.id) {
        this.idiomas[index] = idioma;
        break;
      }
    }
  }

  toggleForm() {
    this.formIdioma.toggleForm();
  }

  editarIdioma(idioma: Idioma) {
    this.formIdioma.setIdioma(idioma);
  }

}
