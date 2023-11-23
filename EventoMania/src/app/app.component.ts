import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eventos: Evento[] = [];
  proximosEventos: Evento[] = [];
  eventosPasados: Evento[] = [];
  direcciones: string[] = [];
  selectedDireccion: string = "";
  eventosFiltrados: Evento[] = [];
  ngOnInit() {
    // Cargamos el fichero JSON
    const json: any = data;

    // Guardamos el fichero cargado en el array de Eventos
    this.eventos = json;

    // Convertimos las fechas a tipo Date
    this.eventos.map((value) => value.fecha = new Date(value.fecha));

    const now = new Date();
    this.proximosEventos = this.eventos.filter(evento => evento.fecha > now);
    this.eventosPasados = this.eventos.filter(evento => evento.fecha <= now);

    this.direcciones = Array.from(new Set(this.eventos.map(evento => evento.direccion)));
  }
  filtrarPorDireccion() {
    if (this.selectedDireccion) {
      this.eventosFiltrados = this.eventos.filter(evento => evento.direccion === this.selectedDireccion);
    } else {
      this.eventosFiltrados = this.eventos;
    }
  }
 }
