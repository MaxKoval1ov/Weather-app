type WeatherBlock = {
  main: string;
  description: string;
  icon: string;
};

export interface WeatherInfo {
  name: string;
  weather: WeatherBlock[];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}
