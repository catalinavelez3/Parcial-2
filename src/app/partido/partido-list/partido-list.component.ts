import { Component, OnInit } from '@angular/core';
import { Partido } from  '../partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {

  partidos: Array<Partido> = []
  golesPorPais: Array<{ pais: string; goles: number }> = []


  constructor(private partidoService: PartidoService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
      this.punto2();
    });
  }

  punto2(): void {
    const punto2Map = this.partidos.reduce((mapa, partido) => {
      const pais = partido.home_team.name;
      const goles = partido.home_team.goals;

      if (goles !== undefined && !isNaN(goles)) {
        mapa.set(pais, (mapa.get(pais) || 0) + goles);
      }

      return mapa;
    }, new Map<string, number>());

    this.golesPorPais = [...punto2Map.entries()]
      .map(([pais, goles]) => ({ pais, goles }))
      .sort((a, b) => b.goles - a.goles);
  }

  ngOnInit() {
    this.getPartidos();
    this.punto2();
  }

}
