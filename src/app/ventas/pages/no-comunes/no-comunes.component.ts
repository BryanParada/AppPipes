import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Juan';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Juan','Eva','Samantha',]; //'Maria', 'Pedro'

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    // 'other': 'tenemos '+ this.clientes.length +'clientes esperando'
    'other': 'tenemos # clientes esperando'
  };

cambiarCliente(){
if (this.genero === 'femenino'){
  this.nombre = 'Juan';
  this.genero = 'masculino'
}else{
  this.nombre = 'Susana';
  this.genero = 'femenino';
}

}

borrarCliente(){
  this.clientes.pop();  
}

//KeyValue Pipe
persona = {
  nombre: 'Bryan',
  edad: 30,
  direccion: 'Santiago, Chile'
}

//JsonPipe
heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
]

//Async
//Observable se ejecuta hasta que tenga una suscripcion
miObservable = interval(1000);

//test interval
// constructor(){
//   this.miObservable.subscribe(console.log);
// }

valorPromesa = new Promise( (resolve, reject) =>{
  setTimeout(() =>{
    resolve('Tenemos data de la promesa');
  }, 3500);

} );


}
