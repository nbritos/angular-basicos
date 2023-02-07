import { Component } from '@angular/core';

interface IPersonaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})




export class MainPageComponent {

  personajes: IPersonaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }


  ];

  nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }

  limpiarRegistro(): void {
    this.nuevo.nombre = '',
      this.nuevo.poder = 0;
  }

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }

  }
}
