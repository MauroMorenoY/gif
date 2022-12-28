import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})



export class GifsServiceService {

  private apikey:string = '8blEsqMCukozjA5L6fRj31VuMw4FFvLV'
  private _historial : string[] = []
  public resultados : Gif[] = []
  private url: string = 'https://api.giphy.com/v1/gifs'
 
  

  get historial(){
    return [...this._historial]
  }
 


  buscarFifs(query:string){

    if(!this._historial.includes(query))
    {
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this._historial))
    
    }

    const parametros = new HttpParams()
    .set('api_key', this.apikey)
    .set('q', query)
    .set('limit', '5')
    .set('offset', '5')
    
    this.http.get<SearchGIFResponse>(`${this.url}/search`,{params:parametros})
    .subscribe((resp) =>{
      console.log(resp.data);
      this.resultados = resp.data;
      localStorage.setItem('imagenes', JSON.stringify(this.resultados))
    });
 }
 
 


 constructor(private http: HttpClient){

  if(localStorage.getItem('historial')){
    this._historial = JSON.parse(localStorage.getItem('historial')!)
  }

  if(localStorage.getItem('imagenes')){
    this.resultados = JSON.parse(localStorage.getItem('imagenes')!)
  }

 }
 }
