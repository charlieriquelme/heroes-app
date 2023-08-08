import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { empty } from 'rxjs';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  termino:string = '';
  heroes: Heroe[]= [];
  heroeSeleccionado: Heroe | undefined;
  // heroeSeleccionado!: Heroe;
  hayError: boolean = false;

  constructor (private heroesService: HeroesService) {}

  buscando(){
    this.heroesService.getSugerencias(this.termino.trim())
      .subscribe(
        (heroes) => {this.heroes = heroes},
        (error) =>  { 
          this.hayError = true;
          this.heroes = [];
          console.log('hola esto es un error');
          console.info(error);
        });

  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    // para extraer el objeto heroe, debemos observar en el value del evento definido en esta funcion

    // TODO: validar si es un string vacío
    if(!event.option.value){ 
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id!)
      .subscribe( heroe => this.heroeSeleccionado = heroe );
  }
}
