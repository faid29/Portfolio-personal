import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { FormProyectoComponent } from './form-proyecto/form-proyecto.component';

@Component({
  selector: 'app-persona-proyectos',
  templateUrl: './persona-proyectos.component.html',
  styleUrls: ['./persona-proyectos.component.css']
})
export class PersonaProyectosComponent implements OnInit {

  @ViewChild("formProyecto") formProyecto!: FormProyectoComponent;
  @Input() proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService){ }

  ngOnInit(): void {
    
  }

  crearNuevaProyecto(proyecto: Proyecto) {
    if (proyecto.id) {
      this.proyectoService.editarProyecto(proyecto).subscribe((proyectoEditada) => {
        this.actualizarPrimeraProyecto(proyectoEditada);
      });
    } else {
      this.proyectoService
        .nuevaProyecto(proyecto)
        .subscribe((nuevaproyecto) => this.proyectos.push(nuevaproyecto));
    }
  }

  borrarProyecto(id: number) {
    this.proyectoService.borrarProyecto(id).subscribe(() => {
      this.proyectos = this.proyectos.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraProyecto(proyecto: Proyecto) {
    for (let index = 0; index < this.proyectos.length; index++) {
      if (this.proyectos[index].id === proyecto.id) {
        this.proyectos[index] = proyecto;
        break;
      }
    }
  }

  toggleForm() {
    this.formProyecto.toggleForm();
  }

  editarProyecto(proyecto: Proyecto) {
    this.formProyecto.setProyecto(proyecto);
  }

}
