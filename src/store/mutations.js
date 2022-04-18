export default{
    setWeatherInfo(state,data){
        state.weatherSearch.name = data.name + ", " + data.sys.country
        state.weatherSearch.temperature = Math.round(data.main.temp)
        state.weatherSearch.weather = data.weather
    }
}