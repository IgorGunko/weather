import { Injectable } from '@angular/core';
import { WeatherServicesModule } from '../../services/weather-services.module';
import { WeatherApiService } from '../../services/api/weather-api.service';
import { Observable } from 'rxjs/index';
import { Forecast } from '../../models/forecast.model';

@Injectable({
  providedIn: WeatherServicesModule
})
export class ForecastPageFacadeService {
  constructor(private weatherApiService: WeatherApiService) {
  }

  getForecast(cityName): Observable<Forecast> {
    return this.weatherApiService.getForecast(cityName);
  }
}
