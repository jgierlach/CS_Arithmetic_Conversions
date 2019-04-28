<template>
  <nav class="white-background z-depth-3">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- Link to home component -->
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Home</a>
        </router-link>

        <!-- Drop down menu for all the conversions available -->
        <router-link to="/conversions" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="dropdown1">
            Conversions
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <!-- Drop down menu for all the explanations available -->
        <router-link to="/conversions" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="dropdown1">
            Explanations
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <!-- Drop down menu for all the practice problems available -->
        <router-link to="/conversions" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="dropdown1">
            Practice Problems
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <router-link to="/about" tag="li">
          <a class="black-text">About</a>
        </router-link>

        <router-link to="/contact" tag="li" class="black-text">
          <a class="black-text">Contact</a>
        </router-link>
      </ul>

      <!-- Dropdown Structure for conversions -->
      <ul id="dropdown1" class="dropdown-content">
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Binary To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Binary</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Hex</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">IEEE 754</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Ones And Twos Complement</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Binary Addition</a>
        </router-link>
      </ul>

      <!-- Dropdown Structure for conversions with examples -->
      <ul id="dropdown1" class="dropdown-content">
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Binary To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Binary</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Hex</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">IEEE 754</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Ones And Twos Complement</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/" tag="li" class="black-text" exact>
          <a class="black-text">Binary Addition</a>
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

.teal-background {
  background: #009688;
}

.black-text {
  color: black;
}

.fixed {
  position: fixed;
}
</style>


