import { WeatherData } from "./types";
/**
 * Learn more about the OpenWeather API on https://openweathermap.org/current.
 */

/**
 * Async fetchs the weather of the given coordinates using
 * the OpenWeather API.
 * @param lat Latitude
 * @param lon Longitude
 * @returns OpenWeather API response for the given coordinates
 */
export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );

  return await response.json();
};
