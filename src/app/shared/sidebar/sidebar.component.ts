import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private servicio: GifsServiceService){

  }
  get historial(){
    return this.servicio.historial;
  }

  buscar(argumento: string)
  {
    this.servicio.buscarFifs(argumento);
    console.log(argumento)
  }

}
