import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
// cuando no estmaos trabajndo para produccion debemos trabajar solo con los environment de desarrollo
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  /*
  get son para conseguir datos
  post para son para agregar datos
  put son para actualizar datos
  delete son para eliminar datos

  */

  private baseUrl: String= environment.baseUrl;

  constructor( private http: HttpClient) { }

  getHeroes() :Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(id:string ) :Observable<Heroe>{
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino:string) :Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe (heroe: Heroe) : Observable<Heroe>{
    // al momento que uno envie un dato a la base de datos la comunicacion nos enviara un observable que tiene la misma caracteristica, para esta caso es un observable tipo heroe
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,heroe);
  }

  actualizarHeroe (heroe: Heroe) : Observable<Heroe>{
    // al momento que uno envie un dato a la base de datos la comunicacion nos enviara un observable que tiene la misma caracteristica, para esta caso es un observable tipo heroe
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`,heroe);
  }

  borrarHeroe (id: string) : Observable<any>{
    // al momento que uno envie un dato a la base de datos la comunicacion nos enviara un observable que tiene la misma caracteristica, para esta caso es un observable tipo heroe
    return this.http.delete<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

}
