import { Component } from '@angular/core';
import { GifsServiceService } from '../services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(private gifservice : GifsServiceService){
  }

  get resultados(){
    return this.gifservice.resultados;
  }
}
