<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container padding move-down z-depth-4"
  >
    <h3 :class="[darkMode ? whiteText : '']" class="center">How To Convert Decimal To Binary?</h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The
      <strong>decimal</strong> number system is the one we have all been using since grammar school. As you well know it uses a base of ten to represent values, and that base consists of 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The
      <strong>binary</strong> number system instead of using a base of 10 uses a base of two. Which means it can only represent a place value as either 0 or 1.
    </p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >Okay so let's jump right in to the best way to convert a value that is in decimal base 10 to binary base 2.</p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >We'll use the decimal value of 172 as an example.</p>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >We're going to divide 172 by 2 until it is 0 keeping track of the remainder as we go.</p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-header center">
        <h5 class="flow-text">
          <strong>172 divided by 2 until 0</strong>
        </h5>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 172, 86 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 86, 43 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 43, 21 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 21, 10 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 21, 10 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 10, 5 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 5, 2 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 2, 1 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 1, 0 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
    </ul>

    <p
      :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >Now all that is left to get the converted binary value is to read this remainder column from the bottom up.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">Put it all together and.....</p>

    <p :class="[darkMode ? whiteText : '']" class="center answer-font">
      172
      <sub>(10)</sub> = 10101100
      <sub>(2)</sub>
    </p>

    <h4 :class="[darkMode ? whiteText : '']" class="center">
      That's all there is to it! Be sure to check out our
      <router-link to="/binary-decimal-conversion">
        <a>decimal to binary converter</a>
      </router-link>
    </h4>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Learn How To Convert Decimal To Binary!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content: 'Easily learn how to convert decimal to binary!'
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
