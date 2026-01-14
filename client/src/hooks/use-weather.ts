import { useQuery } from "@tanstack/react-query";

interface WeatherData {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}

export function useWeather() {
  return useQuery<WeatherData>({
    queryKey: ["/api/weather"],
    staleTime: 1000 * 60 * 30,
  });
}

export function getWeatherIcon(code: number): string {
  if (code === 0) return "sun";
  if (code <= 3) return "cloud-sun";
  if (code <= 48) return "cloud";
  if (code <= 67) return "cloud-rain";
  if (code <= 77) return "cloud-snow";
  if (code <= 82) return "cloud-rain";
  if (code <= 86) return "cloud-snow";
  if (code >= 95) return "cloud-lightning";
  return "cloud";
}

export function getWeatherDescription(code: number): string {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 55) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Rain showers";
  if (code <= 86) return "Snow showers";
  if (code >= 95) return "Thunderstorm";
  return "Unknown";
}
