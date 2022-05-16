import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  URL = "https://frozen-fjord-36122.herokuapp.com/api/persona/skill/";
  
  constructor(private http: HttpClient) { }

  nuevaSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.URL + "nueva", skill);
  }

  borrarSkill(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(this.URL + "editar", skill);
  }


}
