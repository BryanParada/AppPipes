import { Component } from '@angular/core';

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
  clientes: string[] = ['Maria','Maria','Maria','Maria','Maria',]; //'Maria', 'Pedro'

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


}
