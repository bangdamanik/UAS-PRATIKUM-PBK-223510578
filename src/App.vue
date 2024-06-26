<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn2.iconfinder.com/data/icons/weather-365/64/weather-sun-cloud-rain-512.png">
          </q-avatar>
          UAS PBK
        </q-toolbar-title>
        <Navbar />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import Navbar from './components/navbar.vue';

export default {
  name: 'Main',
  components: {
    Navbar
  }
};
</script>