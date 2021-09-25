import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit {

  //PeliculasNuevas: Pelicula[] = [];

  constructor( /*private moviesService: MoviesService*/ ) {}

  //INICIALIZAR SERVICIO PARA APIS
  ngOnInit() {}
    
}
