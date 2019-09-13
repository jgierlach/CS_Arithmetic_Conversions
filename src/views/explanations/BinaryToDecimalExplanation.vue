<template>
  <div
    :class="[darkMode ? darkTextBackground : whiteBackground]"
    class="container padding move-down z-depth-4"
  >
    <h3 :class="[darkMode ? whiteText : '']" class="center">
      How to Convert Binary to Decimal?
    </h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The
      <strong>binary number system</strong> instead of using a
      <strong>base</strong> of <strong>10</strong> uses a base of two. Which
      means it can only represent a place value as either <strong>1</strong> or
      <strong>0</strong>.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      To learn how to convert a binary value to decimal let's walk through an
      example using the value
      <strong>
        10100101
        <sub>2</sub> </strong
      >.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Understanding how place values relate to the value of a number is a key
      concept here.
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 1.</strong> Look at the length of your binary value and write
      a dash for each number in the value.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      The value 10100101 is 8 numbers long so we'll write 8 dashes
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      __ __ __ __ __ __ __ __
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 2.</strong> Beneath the dashes, beginning on the furthest
      right, number the correct place values in ascending order.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Like I said before place value is key to how these conversions work.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Place values begin at 0 on the right and ascend accordingly.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Here's what I mean
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      __ __ __ __ __ __ __ __
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      7 6 5 4 3 2 1 0
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 3.</strong> Now that we have numbered the place values write
      the binary value in above.
    </p>

    <p class="flow-text">1 0 1 0 0 1 0 1</p>
    <p class="flow-text">_ _ _ _ _ _ _ _</p>
    <p class="flow-text">7 6 5 4 3 2 1 0</p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 4.</strong> Go through the binary value and everywhere there
      is a 1 take note of the place value beneath it.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <span class="red-text">1</span> 0 <span class="red-text">1</span> 0 0
      <span class="red-text">1</span> 0
      <span class="red-text">1</span>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      _ _ _ _ _ _ _ _
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <span class="red-text">7</span> 6 <span class="red-text">5</span> 4 3
      <span class="red-text">2</span> 1
      <span class="red-text">0</span>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      You should have taken note of a one at the following place values 0, 2, 5,
      and 7.
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 4.</strong> We need to multiply the number held in a place
      value by the base we're currently in (base 2 binary) to the power of
      actual place value itself.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      I know that sounds really confusing. But in practice it looks much
      simpler.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      (1 x 2
      <sup>0</sup>) + (1 x 2 <sup>2</sup>) + ( 1 x 2 <sup>5</sup>) + (1 x 2
      <sup>7</sup>)
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      As you can see the one are superfluous and we could have just written it
      as
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      2
      <sup>0</sup> + 2 <sup>2</sup> + 2 <sup>5</sup> + 2
      <sup>7</sup>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      But this pattern of (value x current base
      <sup>place value</sup>) is important to understand.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Using it we can convert any number in any base to decimal base 10.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      I'll prove it in a moment but first let's finish the conversion we are in
      the middle of.
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 5.</strong> Add up all the individual sums to get the final
      answer.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      (1 x 2
      <sup>0</sup>) + (1 x 2 <sup>2</sup>) + ( 1 x 2 <sup>5</sup>) + (1 x 2
      <sup>7</sup>)
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      1 + 4 + 32 + 128 = 165
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      10100101
      <sub>2</sub> = 165
      <sub>10</sub>
    </p>

    <br />

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Alright back to proving my point that
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      (value x current base
      <sup>place value</sup>)
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      applies to converting any number in another base to base 10
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Let's take the value octal value of 476
      <sub>8</sub> for example.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      We'll follow the exact same process
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Write out the place values
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">_ _ _</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">2 1 0</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Write out the octal value above the place values
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">4 7 6</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">_ _ _</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">2 1 0</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Now use (value x current base
      <sup>place value</sup>) to convert each individual place value
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      (6 x 8
      <sup>0</sup>) + (7 x 8 <sup>1</sup>) + (4 x 8 <sup>2</sup>)
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      Add it all together
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      6 + 56 + 256 = 318
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      476
      <sub>8</sub> = 318
      <sub>10</sub>
    </p>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Learn How To Convert Binary To Decimal!',
      titleTemplate: '%s ← Cs Conversions',
      meta: [
        {
          name: 'description',
          content: 'Easily learn how to convert binary to decimal values!'
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

<style scoped>
.float-right {
  text-align: right;
}
</style>
