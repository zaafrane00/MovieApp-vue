<template>
  <div>sdgsdg</div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MoviesView",
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/w500",
      detailUrl:
        this.URL + "/3/search/movie/" + this.movieId + "?" + this.API_key,
      url_array: window.location.pathname,
      movieId: 0,
    };
  },
  mounted() {
    this.getMovies();
    console.log(this.detailUrl);
  },
  computed: {
    ...mapGetters(["Movies", "URL", "API_key"]),
    handledURL() {
      return this.URL + "3/movie/";
    },
  },
  created() {
    let url_array = this.url_array.split("/");
    this.movieId = url_array[2];
  },

  methods: {
    ...mapActions(["getMovies"]),
  },
};
</script>