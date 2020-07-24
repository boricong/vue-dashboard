<template>
  <div id="app">
    <div id="nav">
      <!-- router-link가 아닌 a href 사용시 화면이 갱신되는 등 문제 발생 -->
      <router-link to="/">Home(root)</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/about/child">Child</router-link> |
      <router-link to="/aggrid">AgGrid</router-link> |
      <router-link to="/agtable">Table</router-link> |
      <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/fusion">FusionCharts</router-link>
    </div>
    <!-- root component에 router-view 추가. 이곳에 router가 component를 그린다. -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
