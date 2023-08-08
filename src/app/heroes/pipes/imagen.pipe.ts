import {Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
    // el nombre dle pipe personalizado se definirá en la siguiente linea
    name: 'imagen'
    // si nosotros agregamos pure en false, le estamos diciendo a la maquina que dispare cada vez que cambian los datos
    //, pure: false
})

export class  ImagenPipe  implements PipeTransform{
    // url :string ='assets/heroes/';


    

    transform(heroe :Heroe): string {
        console.log('Pipe imagen se proceso');

        if(!heroe.id &&  !heroe.alt_img){
            return 'assets/no-image.png';
        }else if(heroe.alt_img){
            return heroe.alt_img;
        } else {
            return `assets/heroes/${heroe.id}.jpg`;
        }
    }
}