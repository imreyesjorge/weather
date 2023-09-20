import { ToastContainer } from "../components/molecules/ToastContainer";
import { ToastType } from "../components/atoms/Toast/types";
import { WeatherWidget } from "../components/organisms/WeatherWidget";
import { ToastContextProvider } from "../context/ToastContext";

// https://api.vatcomply.com/rates?base=USD

const Home = () => {
  return (
    <main>
      <ToastContextProvider>
        <div className="container">
          <WeatherWidget />
          <ToastContainer />
        </div>
      </ToastContextProvider>
    </main>
  );
};

export default Home;
