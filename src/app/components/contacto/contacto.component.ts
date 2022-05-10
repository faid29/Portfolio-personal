import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Contacto } from 'src/app/model/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { TokenService } from 'src/app/services/token.service';
import { FormContactoComponent } from './form-contacto/form-contacto.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  isLogged: boolean = true;

  contacto: Contacto = { id:0, nombre: '', email: '', asunto:'', mensaje: '' }

  constructor(private contactoService: ContactoService, private tokenService:  TokenService) { }

  ngOnInit(): void {
    this.getContacto()
    this.isLogged = this.tokenService. isLogged()
  }

  getContacto(){
    this.contactoService.getContacto().subscribe( contacto => {
      this.contacto = contacto;
    });
  }

  @ViewChild("formContacto") formContacto!: FormContactoComponent;
  @Input() contactos: Contacto[] = [];


  crearNuevaContacto(contacto: Contacto) {
    if (contacto.id) {
      this.contactoService.editarContacto(contacto).subscribe((contactoEditada) => {
        this.actualizarPrimeraContacto(contactoEditada);
      });
    } else {
      this.contactoService
        .nuevaContacto(contacto)
        .subscribe((nuevacontacto) => this.contactos.push(nuevacontacto));
    }
  }

  borrarContacto(id: number) {
    this.contactoService.borrarContacto(id).subscribe(() => {
      this.contactos = this.contactos.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraContacto(contacto: Contacto) {
    for (let index = 0; index < this.contactos.length; index++) {
      if (this.contactos[index].id === contacto.id) {
        this.contactos[index] = contacto;
        break;
      }
    }
  }

  editarContacto(contacto: Contacto) {
    this.formContacto.setContacto(contacto);
  }

  toggleForm() {
    this.formContacto.toggleForm();
  }


}
