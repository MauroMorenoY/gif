import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private servicio: GifsServiceService){}
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length==0)
    {
      return;
    }
    this.servicio.buscarFifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
