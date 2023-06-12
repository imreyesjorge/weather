"use client";

import "./styles.scss";
import { useLocation } from "../../../hooks/useLocation";
import { useEffect, useRef, useState } from "react";
import { getWeather } from "../../../utils/getWeather";

export const WeatherWidget = () => {
  const [cityName, setCityName] = useState<String>('');
  const [temp, setTemp] = useState<number>(0);
  const { current: currentDate } = useRef<Date>(new Date());

  const [data, isLoading, isError] = useLocation();

  const getWeatherData = async () => {
    // We could simplify this into a one-liner, but for readability 
    // reasons I prefer to store the result on a variable first.
    //
    // setCityName((await getWeather(data.lat, data.lon)).name);
    const weatherData = await getWeather(data.lat, data.lon);

    // Update the widget state
    setCityName(weatherData?.name);
    setTemp(weatherData?.main?.temp || 0);
  }

  useEffect(() => {
    if (isLoading || isError) {
      return
    }

    getWeatherData();
  }, [data, isLoading, isError])

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section>
      <div className="leftContainer">
        <div className="city">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          {isLoading && (
            <div
              className="skeleton"
              style={{ width: "100px", height: "24px", borderRadius: "5px" }}
            />
          )}
          {isError && <p>Unknown</p>}
          {data && <p>{cityName}</p>}
        </div>
        <p>{currentDate.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
      <div className="rightContainer">
        <h3 className="temp">
          {temp}<span>°</span>
        </h3>
      </div>
    </section>
  );
};
