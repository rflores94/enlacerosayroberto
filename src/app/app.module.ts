import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {CeremoniaComponent} from './components/ceremonia/ceremonia.component';
import {ConviteComponent} from './components/convite/convite.component';
import {AsistenciaComponent} from './components/asistencia/asistencia.component';
import {AppRoutingModule} from "./app.routing";
import {RegaloComponent} from "./components/regalo/regalo.component";
import {TransporteComponent} from "./components/transporte/transporte.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CeremoniaComponent,
    ConviteComponent,
    AsistenciaComponent,
    RegaloComponent,
    TransporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
