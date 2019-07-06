ƒ<template>
  <div>
    <div class="navbar-fixed">
      <nav class="white-background z-depth-3 navbar-fixed">
        <div class="nav-wrapper">
          <!-- Hamburger icon for mobile nav -->
          <a href="#" data-target="slide-out" class="sidenav-trigger black-text">
            <i class="material-icons black-text">menu</i>
          </a>

          <!-- Beginning of desktop nav -->
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <!-- Link to home component -->
            <router-link to="/" tag="li" class="black-text" activeClass="active" exact>
              <a class="black-text">Home</a>
            </router-link>

            <!-- Drop down menu for all the conversions available -->
            <router-link to="/" tag="li" class="black-text">
              <a class="dropdown-trigger black-text" data-target="dropdown1">
                Convert
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </router-link>

            <!-- Drop down menu for all the explanations available -->
            <router-link to="/" tag="li" class="black-text">
              <a class="dropdown-trigger black-text" data-target="dropdown2">
                Learn
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </router-link>

            <!-- Drop down menu for all the practice problems available -->
            <router-link to="/" tag="li" class="black-text">
              <a class="dropdown-trigger black-text" data-target="dropdown3">
                Practice Problems
                <i class="material-icons right">arrow_drop_down</i>
              </a>
            </router-link>

            <router-link to="/about" tag="li" activeClass="active">
              <a class="black-text">About</a>
            </router-link>

            <router-link to="/contact" tag="li" class="black-text" activeClass="active">
              <a class="black-text">Contact</a>
            </router-link>
          </ul>

          <!-- Dropdown Structure for conversions tab -->
          <ul id="dropdown1" class="dropdown-content">
            <router-link to="/binary-decimal-conversion" tag="li" class="black-text" exact>
              <a class="black-text">Binary To Decimal</a>
            </router-link>
            <li class="divider"></li>
            <router-link to="/binary-decimal-conversion" tag="li" class="black-text" exact>
              <a class="black-text">Decimal To Binary</a>
            </router-link>
            <li class="divider"></li>
            <router-link to="/hexadecimal-decimal-conversion" tag="li" class="black-text" exact>
              <a class="black-text">Hex To Decimal</a>
            </router-link>
            <li class="divider"></li>
            <router-link to="/hexadecimal-decimal-conversion" tag="li" class="black-text" exact>
              <a class="black-text">Decimal To Hex</a>
            </router-link>
            <li class="divider"></li>
            <router-link to="/ieee-754-conversion" tag="li" class="black-text" exact>
              <a class="black-text">IEEE 754</a>
            </router-link>
            <li class="divider"></li>
            <router-link
              to="/ones-and-twos-complement-conversion"
              tag="li"
              class="black-text"
              exact
            >
              <a class="black-text">Ones And Twos Complement</a>
            </router-link>
            <li class="divider"></li>
            <router-link to="/binary-addition-conversion" tag="li" class="black-text" exact>
              <a class="black-text">Binary Addition</a>
            </router-link>
          </ul>

          <!-- Dropdown Structure for explanations tab -->
          <ul id="dropdown2" class="dropdown-content">
            <!-- Link to Binary To Decimal Explanation -->
            <router-link to="/binary-to-decimal-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Binary To Decimal</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to Decimal to Binary Explanation -->
            <router-link to="/decimal-to-binary-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Decimal To Binary</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link Decimal to Hex Explanation -->
            <router-link to="/decimal-to-hex-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Decimal To Hex</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to Hex to Decimal Explanation -->
            <router-link to="/hex-to-decimal-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Hex To Decimal</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to IEEE754 Explanation -->
            <router-link to="/ieee754-explanation" tag="li" class="black-text" exact>
              <a class="black-text">IEEE 754</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to Ones and Twos complement Explanation -->
            <router-link to="/ones-complement-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Ones And Twos Complement</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to binary addition Explanation -->
            <router-link to="/binary-addition-explanation" tag="li" class="black-text" exact>
              <a class="black-text">Binary Addition</a>
            </router-link>
          </ul>

          <!-- Dropdown Structure for practice problems tab -->
          <ul id="dropdown3" class="dropdown-content">
            <!-- Link to binary practice problems -->
            <router-link to="/binary-practice-problems" tag="li" class="black-text" exact>
              <a class="black-text">Binary</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to hexadecimal practice problems -->
            <router-link to="/hexadecimal-practice-problems" tag="li" class="black-text" exact>
              <a class="black-text">Hexadecimal</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to IEEE 754 practice problems -->
            <router-link to="/ieee-754-practice-problems" tag="li" class="black-text" exact>
              <a class="black-text">IEEE 754</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to Ones and Twos Complement practice problems -->
            <router-link
              to="/ones-and-twos-complement-practice-problems"
              tag="li"
              class="black-text"
              exact
            >
              <a class="black-text">Ones And Twos Complement</a>
            </router-link>
            <li class="divider"></li>
            <!-- Link to binary addition practice problems -->
            <router-link to="/binary-addition-practice-problems" tag="li" class="black-text" exact>
              <a class="black-text">Binary Addition</a>
            </router-link>
          </ul>
        </div>
      </nav>
    </div>

    <!-- Mobile nav begins -->
    <ul id="slide-out" class="sidenav">
      <!-- Beginning of desktop nav -->
      <ul id="nav-mobile">
        <!-- Link to home component -->
        <router-link to="/" tag="li" class="black-text" activeClass="active" exact>
          <a class="black-text">Home</a>
        </router-link>

        <!-- Drop down menu for all the conversions available -->
        <router-link to="/" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="mobile-dropdown1">
            Convert
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <!-- Drop down menu for all the explanations available -->
        <router-link to="/" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="mobile-dropdown2">
            Learn
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <!-- Drop down menu for all the practice problems available -->
        <router-link to="/" tag="li" class="black-text">
          <a class="dropdown-trigger black-text" data-target="mobile-dropdown3">
            Practice Problems
            <i class="material-icons right">arrow_drop_down</i>
          </a>
        </router-link>

        <router-link to="/about" tag="li" activeClass="active">
          <a class="black-text">About</a>
        </router-link>

        <router-link to="/contact" tag="li" class="black-text" activeClass="active">
          <a class="black-text">Contact</a>
        </router-link>
      </ul>

      <!-- Dropdown Structure for conversions tab -->
      <ul id="mobile-dropdown1" class="dropdown-content">
        <router-link to="/binary-decimal-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Binary To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/binary-decimal-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Binary</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/hexadecimal-decimal-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Hex To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/hexadecimal-decimal-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Hex</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/ieee-754-conversion" tag="li" class="black-text" exact>
          <a class="black-text">IEEE 754</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/ones-and-twos-complement-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Ones And Twos Complement</a>
        </router-link>
        <li class="divider"></li>
        <router-link to="/binary-addition-conversion" tag="li" class="black-text" exact>
          <a class="black-text">Binary Addition</a>
        </router-link>
      </ul>

      <!-- Dropdown Structure for explanations tab -->
      <ul id="mobile-dropdown2" class="dropdown-content">
        <!-- Link to Binary To Decimal Explanation -->
        <router-link to="/binary-to-decimal-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Binary To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to Decimal to Binary Explanation -->
        <router-link to="/decimal-to-binary-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Binary</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link Decimal to Hex Explanation -->
        <router-link to="/decimal-to-hex-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Decimal To Hex</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to Hex to Decimal Explanation -->
        <router-link to="/hex-to-decimal-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Hex To Decimal</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to IEEE754 Explanation -->
        <router-link to="/ieee754-explanation" tag="li" class="black-text" exact>
          <a class="black-text">IEEE 754</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to Ones and Twos complement Explanation -->
        <router-link to="/ones-complement-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Ones And Twos Complement</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to binary addition Explanation -->
        <router-link to="/binary-addition-explanation" tag="li" class="black-text" exact>
          <a class="black-text">Binary Addition</a>
        </router-link>
      </ul>

      <!-- Dropdown Structure for practice problems tab -->
      <ul id="mobile-dropdown3" class="dropdown-content">
        <!-- Link to binary practice problems -->
        <router-link to="/binary-practice-problems" tag="li" class="black-text" exact>
          <a class="black-text">Binary</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to hexadecimal practice problems -->
        <router-link to="/hexadecimal-practice-problems" tag="li" class="black-text" exact>
          <a class="black-text">Hexadecimal</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to IEEE 754 practice problems -->
        <router-link to="/ieee-754-practice-problems" tag="li" class="black-text" exact>
          <a class="black-text">IEEE 754</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to Ones and Twos Complement practice problems -->
        <router-link
          to="/ones-and-twos-complement-practice-problems"
          tag="li"
          class="black-text"
          exact
        >
          <a class="black-text">Ones And Twos Complement</a>
        </router-link>
        <li class="divider"></li>
        <!-- Link to binary addition practice problems -->
        <router-link to="/binary-addition-practice-problems" tag="li" class="black-text" exact>
          <a class="black-text">Binary Addition</a>
        </router-link>
      </ul>
    </ul>
  </div>
</template>