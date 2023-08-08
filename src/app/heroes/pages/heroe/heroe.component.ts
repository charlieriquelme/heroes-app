import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 50%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {
  constructor ( private activatedRoute :ActivatedRoute, private heroeService: HeroesService, private router: Router) {}

  heroe!: Heroe;

  ngOnInit(): void {
      //id del heroe
      // y mostrarlo en consola dada información por router link 
      this.activatedRoute.params
        .pipe(
          switchMap( ({id}) => this.heroeService.getHeroePorId(id) )
        )
        .subscribe( heroe => this.heroe = heroe );
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
