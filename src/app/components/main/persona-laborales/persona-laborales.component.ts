import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Laboral } from 'src/app/model/laboral.model';
import { LaboralService } from 'src/app/services/laboral.service';
import { FormLaboralComponent } from './form-laboral/form-laboral.component';

@Component({
  selector: 'app-persona-laborales',
  templateUrl: './persona-laborales.component.html',
  styleUrls: ['./persona-laborales.component.css']
})
export class PersonaLaboralesComponent implements OnInit {

  @ViewChild("formLaboral") formLaboral!: FormLaboralComponent;
  @Input() laborales: Laboral[] = [];

  constructor(private laboralService: LaboralService){ }

  ngOnInit(): void {
  }

  crearNuevaLaboral(laboral: Laboral) {
    if (laboral.id) {
      this.laboralService.editarLaboral(laboral).subscribe((laboralEditada) => {
        this.actualizarPrimeraLaboral(laboralEditada);
      });
    } else {
      this.laboralService
        .nuevaLaboral(laboral)
        .subscribe((nuevalaboral) => this.laborales.push(nuevalaboral));
    }
  }

  borrarLaboral(id: number) {
    this.laboralService.borrarLaboral(id).subscribe(() => {
      this.laborales = this.laborales.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraLaboral(laboral: Laboral) {
    for (let index = 0; index < this.laborales.length; index++) {
      if (this.laborales[index].id === laboral.id) {
        this.laborales[index] = laboral;
        break;
      }
    }
  }

  toggleForm() {
    this.formLaboral.toggleForm();
  }

  editarLaboral(laboral: Laboral) {
    this.formLaboral.setLaboral(laboral);
  }

}
