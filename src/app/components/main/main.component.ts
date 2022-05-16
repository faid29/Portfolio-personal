import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';
import { FormPersonaComponent } from './form-persona/form-persona.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.profesiones.component.css',
             './main.laborales.component.css', './main.educaciones.component.css', 
             './main.idiomas.component.css','./main.skills.component.css','./main.proyectos.component.css', 
             './main.personas.component.css', './main.softs.component.css']
})


export class MainComponent implements OnInit {

  persona: Persona = {id:0, nombre: '', apellido: '', email: '', password: '', telefono: '', pais: '', ciudad: '', estado_civil: '', direccion: '', edad:0, foto:'',
     "profesion":[{id:0, titulo_profesion:'',descripcion_profesion:''}],
     "laboral":[{id:0, nombre_empresa:'',puesto:'', fecha_desde:'',fecha_hasta:'', descripcion_laboral:''}],
     "educacion":[{id:0, nombre_institucion:'', nombre_certificacion:'', fecha_inicio:'',fecha_fin:'', estado:'', descripcion_curso:'', imagen_institucion:''}],
     "idioma":[{id:0, nombre_idioma:'', nivel_idioma:''}],
     "skill":[{id:0, nombre_skill:'', nivel:0, color_skill:''}],
     "soft":[{id:0, nombre:''}],
     "proyecto":[{id:0, titulo_proyecto:'', fecha_proyecto:'', imagen_proyecto:'',imagen_proyecto1:'',imagen_proyecto2:'',imagen_proyecto3:'', descripcion_proyecto:''}]
    };

    isAdmin = false;

  constructor( private personaService: PersonaService, private tokenService: TokenService ){
    this.getPersona()
  

   }

  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
  }

  getPersona(){
    this.personaService.getPersona().subscribe( persona => {
      this.persona = persona;
    });
  }

  
  showShare:boolean = false;

  contador:number = 0;
  
  status:boolean = false;



  dataTitle=
    {
      'titulo1':'Hola, soy',
      'subtitulo':'Full Stack Developer Jr'
    }
  

  dataShare=[
    {
      'tiulo':'Facebook',
      'url':'https://img.icons8.com/fluency/48/000000/facebook-new.png',
      'a':'https://www.facebook.com/sharer/sharer.php?u=https://espai.es',
    },
    {
      'titulo':'Linkedln',
      'url':'https://img.icons8.com/fluency/48/000000/linkedin.png',
      'a':'https://www.linkedin.com/sharing/share-offsite/?url=https://espai.es',
    },
    {
      'tiulo':'Git',
      'url':'https://img.icons8.com/fluency/48/000000/github.png',
      'a':'https://www.linkedin.com/sharing/share-offsite/?url=https://espai.es',
    },
    { 
    'titulo':'Google',
    'url':'https://img.icons8.com/fluency/48/000000/google-plus.png',
    'a':'https://twitter.com/intent/tweet?text=[text]&url=[url]&hashtags=[hashtag]"',
    },
    {
      'titulo':'Whatsapp',
      'url':'https://img.icons8.com/fluency/48/000000/whatsapp.png',
      'a':'https://api.whatsapp.com/send?text=[Hola soy Rubén Sarco, estás compartiendo mi portafolio]',
    },
    {
      'titulo':'Telegram',
      'url':'https://img.icons8.com/color/48/000000/telegram-app--v3.png',
      'a':'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.facebook.com%2Fcreditos.anatuya.5&text=hola',
    }
  ]

  @ViewChild("formPersona") formPersona!: FormPersonaComponent;
  @Input() personas: Persona[] = [];


  crearNuevaPersona(persona: Persona) {
    if (persona.id) {
      this.personaService.editarPersona(persona).subscribe((personaEditada) => {
        this.actualizarPrimeraPersona(personaEditada);
      });
    } else {
      this.personaService
        .nuevaPersona(persona)
        .subscribe((nuevapersona) => this.personas.push(nuevapersona));
    }
  }

  borrarPersona(id: number) {
    this.personaService.borrarPersona(id).subscribe(() => {
      this.personas = this.personas.filter((t) => t.id !== id);
    });
  }

  private actualizarPrimeraPersona(persona: Persona) {
    for (let index = 0; index < this.personas.length; index++) {
      if (this.personas[index].id === persona.id) {
        this.personas[index] = persona;
        break;
      }
    }
  }

  toggleForm() {
    this.formPersona.toggleForm();
  }

  editarPersona(persona: Persona) {
    this.formPersona.setPersona(persona);
  }






}
