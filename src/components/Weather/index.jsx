import { useEffect, useState } from "react";

function WeatherApp() {

    const API_KEY = "a8059a3f9fc411cadf0b4d2ff2eaf39d"
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        const fetchWeather = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await res.json();   // thêm await ở đây
            setWeatherData(data);
        }
        if (city) {                         // tránh gọi API khi city rỗng
            fetchWeather();
        }
    }, [city])

    return (
        <>
            <div className="block text-center">
                <input
                    type="text"
                    placeholder="Mời bạn nhập tên thành phố"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 border rounded"
                />
            </div>

            {weatherData.name && weatherData.sys && (
                <div className="mt-6 p-4 bg-white rounded shadow-md text-center">
                    <h2 className="text-xl font-semibold">
                        {weatherData.name}, {weatherData.sys.country}
                    </h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p className="text-2xl font-bold">{weatherData.main.temp}°C</p>
                    <p>Độ ẩm: {weatherData.main.humidity}%</p>
                    <p>Gió: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </>
    )
}

export default WeatherApp;
