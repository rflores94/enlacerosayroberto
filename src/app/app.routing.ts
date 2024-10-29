import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CeremoniaComponent} from './components/ceremonia/ceremonia.component';
import {ConviteComponent} from './components/convite/convite.component';
import {AsistenciaComponent} from './components/asistencia/asistencia.component';
import {RegaloComponent} from "./components/regalo/regalo.component";
import {TransporteComponent} from "./components/transporte/transporte.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ceremonia', component: CeremoniaComponent},
  {path: 'convite', component: ConviteComponent},
  {path: 'asistencia', component: AsistenciaComponent},
  {path: 'regalo', component: RegaloComponent},
  {path: 'transporte', component: TransporteComponent},
  {path: '**', redirectTo: ''}  // Redirige cualquier ruta no encontrada a la home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
