// main.js

// Import Vue Router
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';  // Perbarui import
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import Home from './components/Home.vue';

// Import komponen halaman
import Profil from './components/Profil.vue'
  
const app = createApp(App)

// Daftarkan plugin
registerPlugins(app)

// Daftarkan Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes: [  // Tentukan rute
  { path: '/', component: Home },
  { path: '/profil', component: () => import('./components/Profil.vue') },
    // Tambahkan rute lain jika diperlukan
  ]
});

app.use(router)

// Pasang aplikasi ke elemen dengan id 'app'
app.mount('#app')
