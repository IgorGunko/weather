import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CityItem } from '../../models/weather.model';
import { CityFlagsUrl, WeatherIconsUrl } from '../../constants';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent implements OnInit{
  @Input() public city: CityItem;
  public cityFlagsUrl = CityFlagsUrl;
  public weatherIconsUrl = WeatherIconsUrl;

  constructor() {}

  ngOnInit(): void {

  }
}
