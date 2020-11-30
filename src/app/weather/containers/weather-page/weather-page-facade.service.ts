import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { CityItem } from '../../models/weather.model';
import { WeatherServicesModule } from '../../services/weather-services.module';
import { Store } from '@ngrx/store';
import { IWeatherPageState } from '../../store/weather/weather-page.state';
import { CURRENT_WEATHER_REQUEST } from '../../store/weather/weather.actions';
import { selectWeatherCity } from '../../store/weather/weather.selectors';

@Injectable({
  providedIn: WeatherServicesModule
})
export class WeatherPageFacadeService {
  currentWeather$: Observable<CityItem[]>;

  constructor(
    private store: Store<IWeatherPageState>
  ) {
    this.currentWeather$ = this.store.select(selectWeatherCity);
  }

  fetchCurrentWeather(): void {
    this.store.dispatch(CURRENT_WEATHER_REQUEST());
  }
}
