<template>
  <div id="app">
    <div id="nav">
      <ul class="nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/tables" class="nav-link">Tables</router-link>
        </li>        
      </ul> 
      <h4 class="text-center mt-3 mb-1">
          VUE CRUD APP
      </h4>                 
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  padding: 30px;
}
li.link > a{
  color: red;
}
</style>
