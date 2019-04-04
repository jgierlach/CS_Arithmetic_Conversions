<template>
  <nav class="white-background z-depth-3">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Home</a>
        </router-link>
        <router-link to="/conversions" tag="li" class="black-text" >
          <a class="black-text">Conversions</a>
        </router-link>>
        <router-link to="/about" tag="li" >
          <a class="black-text">About</a>
        </router-link>
        <router-link to="/contact" tag="li" class="black-text" >
          <a class="black-text">Contact</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.white-background {
  background: white;
}

.black-text {
  color: black;
}
</style>


