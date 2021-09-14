import { Component } from '@angular/core';

interface Componenente { 
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componenente [] =[
    { 
      icon: 'briefcase-outline',
      name: 'Ofertas de Empleos',
      redirecTo: '/ofertas' 
    },
    {
      icon: 'person-add-outline',
      name: 'Registrarse',
      redirecTo: '/registro' 
     },
  ]
  
}