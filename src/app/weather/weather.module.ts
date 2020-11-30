import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './containers/weather-page/weather-page.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { ForecastPageComponent } from './containers/forecast-page/forecast-page.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherServicesModule } from './services/weather-services.module';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    WeatherPageComponent,
    ForecastPageComponent,
    WeatherCardComponent,
    ForecastCardComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    WeatherServicesModule
  ]
})
export class WeatherModule { }
