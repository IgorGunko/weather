import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/index';
import { WeatherCity } from '../../models/weather.model';
import { WeatherServicesModule } from '../weather-services.module';
import { Forecast } from '../../models/forecast.model';

@Injectable({
  providedIn: WeatherServicesModule
})
export class WeatherApiService {
  public cityIds = [703448, 2759794, 756135, 2950159];

  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<WeatherCity> {
    return this.http.get<WeatherCity>(`${environment.apiUrl}/group?id=${this.cityIds}&units=metric&appid=${environment.apiKey}`);
  }

  getForecast(cityName: string): Observable<Forecast>  {
    return this.http.get<Forecast>(`${environment.apiUrl}/forecast?q=${cityName}&cnt=5&units=metric&appid=${environment.apiKey}`);
  }
}
