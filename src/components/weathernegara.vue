<template>
  <div>
    <q-card class="weather-widget">
      <q-card-section>
        <h1>Cuaca</h1>
        <q-form @submit.prevent="updateWeather">
          <q-input  v-model="city" placeholder="Masukkan Kota" outlined dense class="q-mb-md" />
          <q-btn type="submit" label="Search" color="primary" />
        </q-form>
      </q-card-section>
      <q-card-section v-if="weather">
        <p><strong>Lokasi:</strong> {{ weather.name }}</p>
        <p><strong>Temperatur:</strong> {{ weather.main.temp }} °C</p>
        <p><strong>Cuaca:</strong> {{ weather.weather[0].description }}</p>
      </q-card-section>
      <q-card-section v-else>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'WeatherWidget',
  data() {
    return {
      weather: null,
      city: '',
      API_KEY: '2766fa1365c6f76bffbb56c65dca0377',
      BASE_URL: 'https://api.openweathermap.org/data/2.5/weather',
      UNITS: 'metric'
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const response = await fetch(`${this.BASE_URL}?q=${this.city}&units=${this.UNITS}&appid=${this.API_KEY}`);
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
    updateWeather() {
      this.fetchWeather();
    },
  },
  mounted() {
    this.fetchWeather();
  }
};
</script>
<style scoped>
.q-mb-md {
  background-color: rgba(226, 226, 226, 0.85);
}

.weather-widget {
  position: relative;
  font-family: Arial, sans-serif;
  border: 1px solid #040404;
  border-radius: 20px;
  color: rgb(0, 0, 0);
  padding: 16px;
  width: 300px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7; 
  margin-top: 30px;
}

.weather-widget * {
  position: relative;
  z-index: 1; 
}

h1 {
  font-size: 24px;
  text-align: center;
}

form {
  margin-bottom: 16px;
  text-align: center;
}

input {
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #000000;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>