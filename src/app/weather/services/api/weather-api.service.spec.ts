import { TestBed } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { ExpectedWeatherData } from '../../mock/weather-city.mock';
import { ExpectedForecastData } from '../../mock/forecast-mock';

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let http: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [WeatherApiService]
    });
    service = TestBed.inject(WeatherApiService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have made one request to get current weather-page', () => {
    service.getCurrentWeather().subscribe((data) => {
      expect(data).toEqual(ExpectedWeatherData);
    });

    const req = http.expectOne(`${environment.apiUrl}/group?id=${service.cityIds}&units=metric&appid=${environment.apiKey}`);
    expect(req.request.method).toEqual('GET');
    req.flush(ExpectedWeatherData);
  });

  it('should have made one request to get forecast-page', () => {
    const cityName = 'Kyiv';
    service.getForecast(cityName).subscribe((data) => {
      expect(data).toEqual(ExpectedForecastData);
    });

    const req = http.expectOne(`${environment.apiUrl}/forecast?q=${cityName}&cnt=5&units=metric&appid=${environment.apiKey}`);
    expect(req.request.method).toEqual('GET');
    req.flush(ExpectedForecastData);
  });
});
