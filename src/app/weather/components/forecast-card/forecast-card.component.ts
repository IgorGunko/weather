import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastListItem } from '../../models/forecast.model';
import { WeatherIconsUrl } from '../../constants';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastCardComponent {
  @Input() public forecast: ForecastListItem;
  public weatherIconsUrl = WeatherIconsUrl;
}
