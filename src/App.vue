<template>
  <div id="app">
      <div class="container">
          <div class="row flex-lg-row-reverse">
              <div class="col-lg-3">
                  <app-filter></app-filter>
              </div>
              <div class="col-lg-9">
                    <app-posts></app-posts>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Filter from "./components/Filter";
import Posts from "./components/Posts/Posts";

export default {
  name: 'app',
  components: {
      'app-filter': Filter,
      'app-posts': Posts
  }
}
</script>

<style lang="scss">
    @import "assets/scss/main";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 50px 0;
    }
</style>
