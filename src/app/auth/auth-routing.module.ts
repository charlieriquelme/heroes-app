import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    // definimos hijas que heredan el camino dado el path que nosotros definimos
    children:[
      {
        path: 'login',
        component: LoginComponent
      },      
      {
        path: 'registro',
        component: RegistroComponent
      },     
      {
        // caso que no se redireccione a las paginas que nosotros definimos
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
