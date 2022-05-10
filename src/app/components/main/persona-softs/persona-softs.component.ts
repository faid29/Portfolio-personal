import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Soft } from 'src/app/model/soft.model';
import { SoftService } from 'src/app/services/soft.service';
import { FormSoftComponent } from './form-soft/form-soft.component';

@Component({
  selector: 'app-persona-softs',
  templateUrl: './persona-softs.component.html',
  styleUrls: ['./persona-softs.component.css']
})
export class PersonaSoftsComponent implements OnInit {


  @ViewChild("formSoft") formSoft!: FormSoftComponent;
	@Input() softs: Soft[] = [];

	constructor(private softService: SoftService) {}

	crearNuevaSoft(soft: Soft) {
		if (soft.id) {
			this.softService.editarSoft(soft).subscribe((softEditada) => {
				this.actualizarPrimeraSoft(softEditada);
			});
		} else {
			this.softService
				.nuevaSoft(soft)
				.subscribe((nuevasoft) => this.softs.push(nuevasoft));
		}
	}

	borrarSoft(id: number) {
		this.softService.borrarSoft(id).subscribe(() => {
			this.softs = this.softs.filter((t) => t.id !== id);
		});
	}

	private actualizarPrimeraSoft(soft: Soft) {
		for (let index = 0; index < this.softs.length; index++) {
			if (this.softs[index].id === soft.id) {
				this.softs[index] = soft;
				break;
			}
		}
	}

  toggleForm() {
    this.formSoft.toggleForm();
  }

	editarSoft(soft: Soft) {
		this.formSoft.setSoft(soft);
	}

  ngOnInit(): void {
  }
}
