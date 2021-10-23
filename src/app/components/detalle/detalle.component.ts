import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from 'src/app/services/movies.service';
import { Cast, PeliculaDetalle } from '../../interfaces/interfaces';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  }

  constructor( private moviesService: MoviesService, private modalCtrl: ModalController ) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id).subscribe(resp => {
      this.pelicula = resp;
    });

    this.moviesService.getActoresPelicula(this.id).subscribe(resp => {
      this.actores = resp.cast;
    });
    
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  addFavoritos() {
    console.log("Add favorito");
  }

}
