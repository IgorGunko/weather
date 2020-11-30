import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherPageComponent } from './containers/weather-page/weather-page.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { ForecastPageComponent } from './containers/forecast-page/forecast-page.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherServicesModule } from './services/weather-services.module';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';
import { StoreModule } from '@ngrx/store';
import { WEATHER_EFFECTS, WEATHER_REDUCERS, weatherKey } from './store/index';
import { EffectsModule } from '@ngrx/effects';

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
    WeatherServicesModule,
    StoreModule.forFeature(weatherKey, WEATHER_REDUCERS),
    EffectsModule.forFeature(WEATHER_EFFECTS)
  ]
})
export class WeatherModule { }
