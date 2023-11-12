<template>
  <div class="profile-container">
    <h1>Daftar Film</h1>
    

    <!-- Form untuk mengisi daftar film -->
    <form @submit.prevent="submitForm" class="movie-form">
      <label for="movieTitle">Judul Film:</label>
      <input type="text" id="movieTitle" v-model="movieTitle" required>

      <label for="movieGenre">Genre:</label>
      <input type="text" id="movieGenre" v-model="movieGenre" required>

      <label for="releaseDate">Tanggal Rilis:</label>
      <input type="date" id="releaseDate" v-model="releaseDate" required>

      <button type="submit">Tambah Film</button>
    </form>

    <!-- Tabel untuk menampilkan daftar film -->
    <table class="movie-table">
      <thead>
        <tr>
          <th>Judul Film</th>
          <th>Genre</th>
          <th>Tanggal Rilis</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(film, index) in movieList" :key="index">
          <td>{{ film.title }}</td>
          <td>{{ film.genre }}</td>
          <td>{{ film.releaseDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: '',
      movieGenre: '',
      releaseDate: '',
      movieList: [], // Inisialisasi array untuk menyimpan data film
    };
  },
  methods: {
    submitForm() {
      // Simpan data film yang diisi ke dalam array movieList
      const newFilm = {
        title: this.movieTitle,
        genre: this.movieGenre,
        releaseDate: this.releaseDate,
      };

      this.movieList.push(newFilm);

      // Reset formulir setelah pengiriman
      this.movieTitle = '';
      this.movieGenre = '';
      this.releaseDate = '';
    },
  },
};
</script>

<style>
.profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8; /* Warna latar belakang container */
  border-radius: 8px; /* Sudut bulat pada container */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Bayangan lembut */
}

.movie-form {
  margin-bottom: 20px;
}

.movie-form label {
  display: block;
  margin-bottom: 5px;
  color: #333; /* Warna teks label */
}

.movie-form input,
.movie-form button {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box; /* Lebar total termasuk padding */
}

.movie-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.movie-table th,
.movie-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.movie-table th {
  background-color: #f2f2f2;
  color: #333; /* Warna teks header tabel */
}
</style>
