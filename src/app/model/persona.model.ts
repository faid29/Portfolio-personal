import { Educacion } from "./educacion.model";
import { Idioma } from "./idioma.model";
import { Laboral } from "./laboral.model";
import { Profesion } from "./profesion.model";
import { Proyecto } from "./proyecto.model";
import { Skill } from "./skill.model";

export interface Persona {

    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
    pais: string;
    ciudad: string;
    estado_civil: string;
    direccion: string;
    edad: string;
    foto: string;
    profesion: Profesion[];
    laboral: Laboral[];
    educacion: Educacion[];
    idioma: Idioma[];
    skill: Skill[];
    proyecto: Proyecto[];
}
