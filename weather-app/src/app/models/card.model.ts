import { IImage } from './image.model';
import { WeatherInfo } from './weather.model';

export interface WeatherCardInfo {
  image: IImage;
  info: WeatherInfo;
}
