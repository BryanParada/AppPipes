import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string = 'bryan';
  nombreUpper: string = 'BRYAN';
  nombreCompleto: string = 'bRyAN';

  constructor() { }

  ngOnInit(): void {
  }

}
