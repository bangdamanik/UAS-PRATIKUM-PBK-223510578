<template>
    <div>
      <q-toolbar class="navbar">
        <q-btn-dropdown flat label="Tugas Jogi" class="text" dense>
          <q-list style="min-width: 180px">
            <q-item v-for="task in tasks" :key="task.id" clickable v-ripple @click="openTask(task.url)">
              <q-item-section>{{ task.name }}</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </div>
  
    
  </template>
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        tasks: [
          { id: 1, name: 'Tugas 1', url: 'https://t1-pbk-223510578.vercel.app/' },
          { id: 2, name: 'Tugas 2', url: 'https://tugas2-pbk-223510578.vercel.app/' },
          { id: 3, name: 'Tugas 3', url: 'https://tugas3-pbk-223510578.vercel.app/' },
          { id: 4, name: 'Tugas 4', url: 'https://tugas4-pbk-223510578.vercel.app/' },
          { id: 5, name: 'Tugas 5', url: 'https://tugas5-pbk-223510578.vercel.app/' },
          { id: 6, name: 'Tugas 6', url: 'https://tugas6-prak-pbk-223510578.vercel.app/' },
          { id: 7, name: 'Tugas 7', url: 'https://tugas7pbk-223510578.vercel.app/' },
        ],
      };
    },
    methods: {
      openTask(url) {
        window.open(url, '_blank');
      },
    },
  };
  </script>
  <style scoped>
  .navbar {
    background-color: white;
    color: black;
  }
  
  .text{
    color: black;
  }
  
  .q-btn-dropdown .q-item-section {
    font-size: 16px;
  }
  
  .q-toolbar-title {
    font-size: 20px;
    font-weight: bold;
  }
  </style>