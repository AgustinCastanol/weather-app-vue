<template>
  <div class="app" :class="`${bgTemp}`">
      <main class="min-h-screen p-[25px]">
          <div class="w-full m-[0 0 75px]">
            <input class="block w-full p-[15px] appearance-none bg-[none] border-none outline-none bg-[rgba(255, 255, 255, 0.5)] rounded-b-[16px] mt-[-25px] shadow-[0px_5px_rgba(0,0,0,0.2)] color-[#313131] text-[20px]
            focus:bg-[rgba(255,255,255,0.75)]"
              type="text"
              placeholder="Buscando..."
              v-model="inputSearch"
              @keypress.enter="requestSearch(this.inputSearch)"
            />
          </div>
            <div v-if="this.$store.state.weatherSearch.weather[0] != undefined">
              <div>
                <div class="text-[#fff] text-[32px] font-medium text-center drop-shadow-[3px_3px_rgba(50,50,70,0.5)]">
                  {{this.$store.state.weatherSearch.name}}
                </div>
                <div class="text-[#fff] text-[20px] font-light text-center italic drop-shadow-[2px_2px_rgba(50,50,70,0.5)]">
                {{dateBuilder(this.$store.state.weatherSearch.time)}}
                </div>
              </div>
              <div class="text-center">
                <div class="relative inline-block m-[30px_auto] bg-[rgba(255,255,255,0.2)] rounded-[16px] p-[15px_25px] text-[#fff] text-[102px] font-black drop-shadow-[3px_6px_rgba(50,50,70,0.5)] shadow-[3px_6px_rgba(0,0,0,0.2)]">
                  {{this.$store.state.weatherSearch.temperature}}°C
                  {{changeBackgroundImage(this.$store.state.weatherSearch.temperature)}}
                </div>
                <div class="text-[#fff] text-[48px] font-bold drop-shadow-[3px_3px_rgba(50,50,70,0.5)]">
                  {{this.$store.state.weatherSearch.weather[0].main}}
                </div>
              </div>
            </div>
      </main>
  </div>
</template>

<script>
export default {
      data(){
        return {inputSearch:"",
        bgTemp:"cold"
        }
      },
      methods: {
           requestSearch(data){
            this.$store.dispatch("requestApi",data)
            this.inputSearch=""
            },
            dateBuilder(d){
              let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
              
              let day = days[d.getDay()];
              let date = d.getDate();
              let month = months[d.getMonth()];
              let year = d.getFullYear();

              return `${day} ${date} ${month} ${year}`
            },
            changeBackgroundImage(t){
              this.bgTemp = t > 20 ?"warm":"cold"
            }
      },
      computed:{
        setWeatherInApp(){
          return this.$store.getters.getWeather
        }
      }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
}
.app{

  background-size: cover;
  background-position: bottom;
  transition: 0.4 ease;
}
</style>

