import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Profesion } from 'src/app/model/profesion.model';
import { ProfesionService } from 'src/app/services/profesion.service';
import { FormProfesionComponent } from './form-profesion/form-profesion.component';

@Component({
  selector: 'app-persona-profesiones',
  templateUrl: './persona-profesiones.component.html',
  styleUrls: ['./persona-profesiones.component.css']
})
export class PersonaProfesionesComponent implements OnInit {

  @ViewChild("formProfesion") formProfesion!: FormProfesionComponent;
  @Input() profesiones: Profesion[] = [];

  constructor(private profesionService: ProfesionService){ }

  ngOnInit(): void {
  }

  crearNuevaProfesion(profesion: Profesion) {
    if (profesion.id) {
      this.profesionService.editarProfesion(profesion).subscribe((profesionEditada) => {
        this.actualizarPrimeraProfesion(profesionEditada);
      });
    } else {
      this.profesionService
        .nuevaProfesion(profesion)
        .subscribe((nuevaprofesion) => this.profesiones.push(nuevaprofesion));
    }
  }

  borrarProfesion(id: number) {
    this.profesionService.borrarProfesion(id).subscribe(() => {
      this.profesiones = this.profesiones.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraProfesion(profesion: Profesion) {
    for (let index = 0; index < this.profesiones.length; index++) {
      if (this.profesiones[index].id === profesion.id) {
        this.profesiones[index] = profesion;
        break;
      }
    }
  }

  toggleForm() {
    this.formProfesion.toggleForm();
  }

  editarProfesion(profesion: Profesion) {
    this.formProfesion.setProfesion(profesion);
  }


}
