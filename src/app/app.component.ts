import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Propiedades */
  nombre: string = "melissa";
  correo:string;
  /*lista en donde se guardara nombre mas correo */
  listaDatos: {}[] = [];
  mostrar: Boolean = true;
  desabilitar:  Boolean = true;
  /* mostrar = true */
  /* Funciones */

  /* Agregando nombre y correo */
  agregar(){
    console.log('click');
    /* toma los valores de nombre y correo */
    let detalleDatos = {nombre: this.nombre, correo: this.correo }
    /* incorporando los valores en la lista */
    this.listaDatos.push(detalleDatos);
    console.log(this.listaDatos);
    /*limpiando los campos, la propieda de ngModel */
    this.nombre =" "
    this.correo = " "
  }

  /* mostrar y ocultar correo */
  ver(){
    this.mostrar =! this.mostrar;
    //console.log(most);
    console.log(this.mostrar);
   
  }
}
