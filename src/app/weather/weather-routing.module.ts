import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPageComponent } from './containers/weather-page/weather-page.component';
import { ForecastPageComponent } from './containers/forecast-page/forecast-page.component';

const routes: Routes = [
  { path: '', component: WeatherPageComponent },
  { path: ':city', component: ForecastPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
