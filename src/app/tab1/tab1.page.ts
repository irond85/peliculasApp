import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasNuevas: Pelicula[] = [];

  constructor( private moviesService: MoviesService ) {}

  //INICIALIZAR SERVICIO PARA APIS
  ngOnInit() {
    this.moviesService.getFeature()
    .subscribe( resp => {
      console.log('Resp', resp.results);
      this.peliculasNuevas = resp.results;
    });
  }
}
