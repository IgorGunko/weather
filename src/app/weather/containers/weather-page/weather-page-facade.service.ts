import { Injectable } from '@angular/core';
import { WeatherApiService } from '../../services/api/weather-api.service';
import { Observable } from 'rxjs/index';
import { CityItem, WeatherCity } from '../../models/weather.model';
import { map } from 'rxjs/internal/operators';
import { WeatherServicesModule } from '../../services/weather-services.module';

@Injectable({
  providedIn: WeatherServicesModule
})
export class WeatherPageFacadeService {
  currentWeather$: Observable<CityItem[]>;

  constructor(private weatherApiService: WeatherApiService) {
    this.currentWeather$ = this.weatherApiService.getCurrentWeather()
      .pipe(map((data: WeatherCity ) => data.list));
  }
}
