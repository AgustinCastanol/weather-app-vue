import {requestApiWeather} from "../api/api"

export default{
    async requestApi(context,data){
        if(data === ""){
            throw new Error("204 No content")
        }
            
        let req = await requestApiWeather(data)
        context.commit('setWeatherInfo',req)
    }
}