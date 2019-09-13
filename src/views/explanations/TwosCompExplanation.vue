<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container padding move-down z-depth-4"
  >
    <h3 :class="[darkMode ? whiteText : '']" class="center">
      How to convert to twos complement?
    </h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Converting a negative number to twos complement is exactly the same
      process as converting to ones complement with the exception of an
      additional step at the end.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      If you're not already familiar with how to convert to ones complement
      check out our
      <router-link to="/ones-complement-explanation">
        <a>explanation</a> </router-link
      >.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Let's walk through the process with -24. The same number we used for the
      ones complement example.
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 1.</strong> We strip away the negative sign and convert 24 to
      its binary equivalent.
    </p>

    <ul class="collection with-header z-depth-3 container">
      <li class="collection-header center">
        <h5 class="flow-text">
          <strong>Steps In Conversion</strong>
        </h5>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 24, 12 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 12, 6 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 6, 3 times with a
          <strong>remainder</strong> of
          <span class="red-text">0</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 3, 1 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          2 goes into 1, 0 times with a
          <strong>remainder</strong> of
          <span class="red-text">1</span>
        </p>
      </li>
      <li class="collection-item">
        <p class="flow-text center">
          24
          <sub>10</sub> =
          <span class="red-text">
            11000
            <sub>2</sub>
          </span>
        </p>
      </li>
    </ul>

    <br />
    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 2.</strong> For a number to be converted to two’s compliment
      it must be 8 bits in length.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      We have 11000 which is only 5 bits long. To make it 8 bits we will append
      zeros (0) to the front of the string until it is 8 bits long.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Take note that by appending zeros to the front of the string we are not
      actually changing the value of the conversion.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      So now the converted result is 00011000
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 3.</strong> We simply invert all the bits. So this means that
      the 0s become 1s and the 1s 0s.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      00011000
    </p>
    <p class="red-text flow-text center">11100111</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      As you can see so far the previous 3 steps have been identical to how we
      would convert ones complement. The fourth and final step is where they
      differ.
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 4.</strong> We will add 1 to the inverted bit string and this
      will be our final answer.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      If you're not familiar with how to do binary addition check out our
      explanation and adding tool.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      11100111 + 1 =
      <span class="red-text">11101000</span>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      The
      <strong>twos complement</strong> of <strong>-24</strong> is
      <span class="red-text">11101000</span>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Be sure to check out our
      <router-link to="/ones-and-twos-complement-conversion">
        <a>twos complement conversion tool</a> </router-link
      >!
    </p>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Learn How To Convert Negative Numbers To Twos Complement!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content:
            'Easily learn how to convert negative numbers to twos complement!'
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
