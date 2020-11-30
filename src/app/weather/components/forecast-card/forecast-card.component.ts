import { Component, Input, OnInit } from '@angular/core';
import { ForecastListItem } from '../../models/forecast.model';
import { WeatherIconsUrl } from '../../constants';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {
  @Input() public forecast: ForecastListItem;
  public weatherIconsUrl = WeatherIconsUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
