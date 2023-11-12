<template>
  <v-container>
    
    <v-row>
      <v-col v-for="card in cards" :key="card.id" cols="12" md="4">
        <v-card class="mx-auto" max-width="200" height="410">
          <v-img
            :src="card.image"
            alt="Card image"
          ></v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-subtitle>{{ card.subtitle }}</v-card-subtitle>
          <v-card-text>{{ card.content }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Import gambar di sini
import sao1 from '@/assets/sao1.jpg';
import sao2 from '@/assets/sao2.jpg';
import suzume3 from '@/assets/suzume3.jpg';

export default {
  data() {
    return {
      cards: [
        { id: 1, title: 'Sword Art Online', subtitle: '2005', content: 'Card content 1', image: sao1 },
        { id: 2, title: 'SAO Progressive', subtitle: '2021', content: 'Tidak ada cara untuk mengalahkan permainan ini. Satu-satunya perbedaan adalah kapan dan di mana kamu mati..." satu bulan telah berlalu sejak permainan mematikan Akihiko Kayaba dimulai, dan korban terus meningkat. Dua ribu pemain sudah mati. Kirito dan Asuna adalah dua orang yang sangat berbeda, tapi mereka ingin bertarung sendiri.', image: sao2 },
        { id: 3, title: 'Suzume', subtitle: '2023', content: 'Perjalanan Suzume dimulai di sebuah kota yang tenang di Kyushu (terletak di Barat daya Jepang) ketika dia bertemu dengan seorang pria muda yang mengatakan kepadanya, "Saya sedang mencari pintu." Apa yang Suzume temukan adalah satu pintu lapuk yang berdiri tegak di tengah reruntuhan seolah terlindung dari malapetaka apa pun yang melanda.', image: suzume3 },
        // Tambahkan lebih banyak kartu dengan gambar yang berbeda
      ],
    };
  },
};
</script>
