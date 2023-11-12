<template>
  <v-app>
    <v-navigation-drawer :width="200">
      <v-list-item link to="/" title="Aplikasi FIlm" subtitle=""></v-list-item>
      <v-divider></v-divider>
      <v-list-item link to="/profil" title="Daftar Film"></v-list-item>
      <v-list-item link to="/barang" title="Detail Film"></v-list-item>
    </v-navigation-drawer>

    <v-app-bar :order="order" color="deep-purple" flat title="Application bar">
      <template v-slot:append>
        <v-switch
          v-model="order"
          hide-details
          inset
          label="Toggle order"
          true-value="-1"
          false-value="0"
        ></v-switch>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <HelloWorld />
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
const order = ref(0);
</script>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  // data: () => ({
  //   order: 0,
  // }),
};
</script>
