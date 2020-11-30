import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/weather', pathMatch: 'full'},
  {path: 'weather', loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
