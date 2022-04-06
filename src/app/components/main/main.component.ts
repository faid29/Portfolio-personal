import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './main.profesiones.component.css',
             './main.laborales.component.css', './main.educaciones.component.css', 
             './main.idiomas.component.css','./main.skills.component.css']
})


export class MainComponent implements OnInit {

  persona: Persona = {id:0, nombre: '', apellido: '', email: '', password: '', telefono: '', pais: '', ciudad: '', estado_civil: '', direccion: '', edad: '', foto:'',
     "profesion":[{id:0, titulo_profesion:'',descripcion_profesion:''}],
     "laboral":[{id:0, nombre_empresa:'',puesto:'', fecha_desde:'',fecha_hasta:'', descripcion_laboral:''}],
     "educacion":[{id:0, nombre_institucion:'', nombre_certificacion:'', fecha_inicio:'',fecha_fin:'', estado:'', descripcion_curso:'', imagen_institucion:''}],
     "idioma":[{id:0, nombre_idioma:'', nivel_idioma:''}],
     "skill":[{id:0, nombre_skill:'', nivel:0}],
     "proyecto":[{id:0, titulo_proyecto:'', fecha_proyecto:'', imagen_proyecto:'', descripcion_proyecto:''}]
    };

/*   skill: Skill = {id:0, nombre_skill:'', nivel:0} */
 
  constructor( private personaService: PersonaService, /* private skillService: SkillService */){
    this.getPersona()
   /*  this.getSkill() */
   }

  ngOnInit(): void {}

  getPersona(){
    this.personaService.getPersona().subscribe( persona => {
      this.persona = persona;
    });
  }

/*   getSkill(){
    this.skillService.getSkill().subscribe( skill => {
      this.skill = skill;
    });
  } */

  
  showShare:boolean = false;

  contador:number = 0;
  
  estadoHeart:boolean = true;

  dataTitle=
    {
      'titulo1':'Hola, soy',
      'subtitulo':'Full Stack Developer Jr'
    }
  

  dataShare=[
    {
      'tiulo':'Facebook',
      'url':'https://img.icons8.com/fluency/48/000000/facebook-new.png',
    },
    {
      'titulo':'Linkedln',
      'url':'https://img.icons8.com/fluency/48/000000/linkedin.png'
    },
    {
      'tiulo':'Git',
      'url':'https://img.icons8.com/fluency/48/000000/github.png',
    },
    { 
    'titulo':'Google',
    'url':'https://img.icons8.com/fluency/48/000000/google-plus.png'
    },
    {
      'titulo':'Whatsapp',
      'url':'https://img.icons8.com/fluency/48/000000/whatsapp.png'
    },
    {
      'titulo':'Telegram',
      'url':'https://img.icons8.com/color/48/000000/telegram-app--v3.png'
    }
  ]


















}
