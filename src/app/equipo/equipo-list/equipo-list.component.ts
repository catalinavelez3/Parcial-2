import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipo-detail';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  selected: Boolean = false;
  selectedEquipo!: EquipoDetail;



  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => {
      this.equipos = equipos;
    });
  }

  ngOnInit() {
    this.getEquipos()

  }

}
