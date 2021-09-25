import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }
  
  //Metodo para consumir APIS
  getFeature(){
    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2021-10-22&api_key=6c9a15272bb29037e9b8dac282bb28ea&language=es`)
  }
}
