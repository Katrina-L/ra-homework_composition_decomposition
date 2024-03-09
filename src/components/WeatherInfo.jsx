const weather = {
    img: "",
    temprature: "+17",
    morning: "+17",
    day: "+20"
}

// Создает блок информации о погоде
export const WeatherInfo = () => {
    return (
        <div className="weather-block">
            <img className="weather-block-img" src={weather.img} />
            <p className="weather-block-now">{weather.temprature}</p>
            <div className="weather-block-morning-day">
                <p>Утром {weather.morning}</p>
                <p>Днём {weather.day}</p>
            </div>
        </div>
    )
}