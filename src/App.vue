<template>
  <div id="app">
    <header>
      <nav id="navbar">
        <div class="app_container">
          <ul>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Home'}" exact>Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Creator'}" exact>Creator</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Viewer'}" exact>Surveys</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Analyse'}" exact>Analyse</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'About'}" exact>About</router-link>
            </li>


          </ul>
        </div>
      </nav>
    </header>
    <div class="app_container">
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>


</style>
