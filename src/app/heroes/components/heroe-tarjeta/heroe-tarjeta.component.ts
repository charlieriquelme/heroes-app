import { Component,Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `mat-card {
      margin-top: 20px
    }
    `
  ]
})
export class HeroeTarjetaComponent {
  // si deseamos enviar un solo dato u/o observable con el signo de exclamación le confirmamos a typescript que si o si recibirá un observable tipo heroe 
  // para esta ocasión}
  @Input() heroe!: Heroe;
}
