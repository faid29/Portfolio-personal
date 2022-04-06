import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';
import { FormEducacionComponent } from './form-educacion/form-educacion.component';

@Component({
  selector: 'app-persona-educaciones',
  templateUrl: './persona-educaciones.component.html',
  styleUrls: ['./persona-educaciones.component.css']
})
export class PersonaEducacionesComponent implements OnInit {

  @ViewChild("formEducacion") formEducacion!: FormEducacionComponent;
  @Input() educaciones: Educacion[] = [];

  constructor(private educacionService: EducacionService){ }

  ngOnInit(): void {
  }

  crearNuevaEducacion(educacion: Educacion) {
    if (educacion.id) {
      this.educacionService.editarEducacion(educacion).subscribe((educacionEditada) => {
        this.actualizarPrimeraEducacion(educacionEditada);
      });
    } else {
      this.educacionService
        .nuevaEducacion(educacion)
        .subscribe((nuevaEducacion) => this.educaciones.push(nuevaEducacion));
    }
  }

  borrarEducacion(id: number) {
    this.educacionService.borrarEducacion(id).subscribe(() => {
      this.educaciones = this.educaciones.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraEducacion(educacion: Educacion) {
    for (let index = 0; index < this.educaciones.length; index++) {
      if (this.educaciones[index].id === educacion.id) {
        this.educaciones[index] = educacion;
        break;
      }
    }
  }

  toggleForm() {
    this.formEducacion.toggleForm();
  }

  editarEducacion(educacion: Educacion) {
    this.formEducacion.setEducacion(educacion);
  }

}
