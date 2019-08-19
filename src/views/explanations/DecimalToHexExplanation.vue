<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container padding move-down z-depth-4"
  >
    <h3 :class="[darkMode ? whiteText : '']" class="center">How to Convert Decimal to Hex?</h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The
      <strong>decimal number system</strong> is the one we have all been using since grammar school. As you well know it uses a
      <strong>base of ten</strong> to represent values, and that base consists of
      <strong>0, 1, 2, 3, 4, 5, 6, 7, 8,</strong> and
      <strong>9</strong>.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The
      <strong>hexadecimal number system</strong>, also referred to
      <strong>shorthand</strong> as just
      <strong>Hex</strong>, uses a
      <strong>base 16</strong> number system. If you were like me when you first encountered
      <strong>hexadecimal</strong> values you might have been confused by what all the
      <strong>letters</strong> meant.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      In the base 10
      <strong>decimal system</strong> we have
      <strong>0 through 9</strong> to represent numbers. In base 16
      <strong>hexadecimal</strong> we have
      <strong>0 through 9</strong> as well, but we also need some way to convey the values
      <strong>10 through 15</strong>.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      This is where the letters
      <strong>A through F</strong> come in. Their purpose is to
      <strong>represent</strong> the values
      <strong>10 through 15</strong>. Seeing it all written out is the best way to understand it.
    </p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-item">
        <p class="flow-text">0</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">1</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">2</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">3</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">4</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">5</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">6</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">7</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">8</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">9</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">A = 10</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">B = 11</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">C = 12</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">D = 13</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">E = 14</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">F = 15</p>
      </li>
    </ul>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >Alright! Now that we understand what hex is and how it works, let's convert a decimal value to hex.</p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >We'll use the decimal value of 56,489 as an example.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 1.</strong> We are going to divide 56,489 by 16 until it is 0 and keep track of the remainders as we go.
    </p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-header center">
        <h5 class="flow-text">
          <strong>Steps In Conversion</strong>
        </h5>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          16 goes into 56489, 3530 times with a
          <strong>remainder</strong> of
          <span class="red-text">9</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          16 goes into 3530, 220 times with a
          <strong>remainder</strong> of
          <span class="red-text">10</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          16 goes into 220, 13 times with a
          <strong>remainder</strong> of
          <span class="red-text">12</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          16 goes into 13, 0 times with a
          <strong>remainder</strong> of
          <span class="red-text">13</span>
        </p>
      </li>
    </ul>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    ><strong>If we read the remainder column from the bottom up we will get the following converted result.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      <span class="red-text">13</span> -
      <span class="red-text">12</span> -
      <span class="red-text">10</span> -
      <span class="red-text">9</span>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      But we're not done yet. With the exception of
      <strong>9</strong> all the other remainder values are between 10 and 15.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Let's look at our
      <strong>hex table</strong> to see how those values should be represented.
    </p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-item">
        <p class="flow-text">A = 10</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">B = 11</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">C = 12</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">D = 13</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">E = 14</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">F = 15</p>
      </li>
    </ul>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >So in our converted result of 13 - 12 - 10 - 9</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      13 becomes
      <span class="red-text">D</span>
    </p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      12 becomes
      <span class="red-text">C</span>
    </p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      10 becomes
      <span class="red-text">A</span>
    </p>

    <h3 :class="[darkMode ? whiteText : '']" class="flow-text center">
      The final answer is is 56,489
      <sub>10</sub> =
      <span class="red-text">DCA9</span>
      <sub>16</sub>
    </h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Be sure to check out our
      <router-link to="/hexadecimal-decimal-conversion">
        <a>decimal to hex converter tool</a>
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Learn How To Convert Decimal To Hexadecimal!',
      titleTemplate: '%s ← CS Conversions',
      meta: [
        {
          name: 'description',
          content: 'Easily learn how to convert decimal to hexadecimal values!'
        }
      ]
    }
  },
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text'
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

