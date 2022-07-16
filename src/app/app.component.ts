import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'jose luis';
  telefono = '1154556866';
  dni = '8765432';

  cambiaDni(valor) {
    // Podes consultar el valor por consola
    console.log(valor);
    this.dni = valor;
  }

  onClick() {
    alert('Hiciste click!!');
  }

}
