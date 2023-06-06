"use client";

import "./styles.scss";
import { useLocation } from "../../../hooks/useLocation";
import { useRef } from "react";

export const Header = () => {
  const { current: currentDate } = useRef<Date>(new Date());

  const [data, isLoading, isError] = useLocation();

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <header>
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
          {data && <p>{data?.name}</p>}
        </div>
        <p>{currentDate.toLocaleDateString(undefined, dateOptions)}</p>
      </div>
      <div className="rightContainer">
        {isError && <p className="coords">Couldn’t get your location</p>}
        {data && (
          <p className="coords">
            <span>lat:</span> {data?.lat}, <span>lon:</span> {data?.lon}
          </p>
        )}
      </div>
    </header>
  );
};
