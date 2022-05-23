<template>
  <div class="hello">
    <b-container fluid="lg">
      <br />
      <br />
      <b-row>
        <b-card-group deck v-for="row in Movies" :key="row.id" style="margin-left:60px">
          <br />
          <br />
          <br />
          <b-card
            :title="row.title"
            :img-src="imgUrl+row.backdrop_path"
            img-alt="Image"
            style="max-width: 25rem;"
          >
            <b-card-text>{{row.release_date}}</b-card-text>
            <template #footer>
              <small class="text-muted">{{row.overview}}</small>
            </template>
            <b-button variant="primary" @click="goMoviePage(row.id)">See More</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/w500",
    };
  },
  mounted() {
    this.getMovies();
    console.log("qsfqsf", this.Movies);
  },
  computed: {
    ...mapGetters(["Movies", "URL", "API_key"]),
    handledURL() {
      return this.URL + "3/movie/";
    },
  },
  created() {},

  methods: {
    ...mapActions(["getMovies"]),
    goMoviePage(id) {
      this.$router.push("movie/" + id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
