import API from"./config"


export async function requestApiWeather(query){
    const res = await fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
    const result_1 = await res.json()
    return (result_1)
}
