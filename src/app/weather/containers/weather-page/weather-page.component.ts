import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WeatherPageFacadeService } from './weather-page-facade.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherPageComponent implements OnInit {
  constructor(public facade: WeatherPageFacadeService) {}

  ngOnInit(): void {
    this.facade.fetchCurrentWeather();
  }
}
