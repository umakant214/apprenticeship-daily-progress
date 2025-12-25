import { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const SearchBar = lazy(() => import("./components/SearchBar"));
const CurrentWeather = lazy(() => import("./components/CurrentWeather"));
const Forecast = lazy(() => import("./components/Forecast"));
const WeatherCard = lazy(() => import("./components/WeatherCard"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div>Loading....</div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/currentWeather" element={<CurrentWeather />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/weatherCard" element={<WeatherCard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
