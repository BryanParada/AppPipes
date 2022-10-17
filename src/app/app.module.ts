import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PrimeNGModule } from './prime-ng/prime-ng.module';

import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

// Cambiar el locale de la app
import localeEs from "@angular/common/locales/es-CL";
import { registerLocaleData } from '@angular/common'
registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    PrimeNGModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
