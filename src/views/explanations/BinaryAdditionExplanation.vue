<template>
  <div :class="[darkMode ? darkTextBackground : whiteBackground]" class="container padding move-down z-depth-4">
    <h3 :class="[darkMode ? whiteText : '']" class="center">How To Do Binary Addition?</h3>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Binary Addition</strong> requires knowledge of how the binary number system works. If you are familliar with that, understanding the following arithmetic is all that is required to perform binary addition.
    </p>

    <ul class="collection with-header z-depth-2">
      <li class="collection-header center">
        <h5 class="flow-text">
          <strong>In the base 2 binary number system:</strong>
        </h5>
      </li>
      <li class="collection-item">
        <p class="flow-text">0 + 0 = 0</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">0 + 1 = 1</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">1 + 0 = 1</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">1 + 1 = 10 (which is 0 carry 1)</p>
      </li>
      <li class="collection-item">
        <p class="flow-text">1 + 1 + 1 = 11 (which is 1 carry 1)</p>
      </li>
    </ul>

    <p :class="[darkMode ? whiteText : '']"
      class="flow-text"
    >To get a better understanding we are going to walk through a few examples. Each will demonstrate a different concept. Make sure you understand them all.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">
      <strong>Example 1: What is 1010 + 10101?</strong>
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 1.</strong>
      This may seem obvious but arrange them vertically by place value as you would in normal decimal addition.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 0</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 0 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________________</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">
      <strong>Step 2.</strong>
      Just as in addition of decimal we will add from right to left.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">We begin by adding 0 + 1 = <span class="red-text">1</span></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 0</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 0 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center red-text"><pre>     1</pre></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text"><strong>Step 3.</strong> As we add the other values you will notice that they are all either 1 + 0 or 0 + 1. We know in binary that both of those sums are equal to 1.
    </p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 0</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 0 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center red-text">1 1 1 1 1</p> 
   
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">The final answer is <span class="red-text answer-font">11111</span>.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">Okay that one was kind've easy. There were no carries involved. Let's try another problem.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center"><strong>Example 2: what is 1011 + 11101?</strong></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text"><strong>Step 1.</strong> Again arrange them vertically and by place value.</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text"><strong>Step 2.</strong> We add from right to left. The first sum is 1 + 1 = 10. This will result in 0 with a carry of 1.</p>

    
    <p class="flow-text center red-text"><pre>  1</pre></p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p class="flow-text center red-text"><pre>     0</pre></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">Now in the next column we have 1 + 1 + 0 . We add the first two values and then that sum is added to the remaining value.  1 + 1 = 10 then 10 + 0 = 10. Therefore, we are going to write 0 and carry 1.</p>

    <p class="flow-text center red-text"><pre>  11</pre></p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p class="flow-text center red-text"><pre>   00</pre></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">Next, we must add 1 + 0 + 1. We add the first two numbers and get 1 + 0 = 1, then that sum is added to the remaining number, 1 + 1 = 10. So we write 0 and carry 1</p>

    <p class="flow-text center red-text"><pre>111</pre></p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p class="flow-text center red-text"><pre>  000</pre></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">Next, 1 + 1 + 1 we add the first two 1 + 1 = 10 then the results are added to the third 10 + 1 = 11. So we write 1 then we carry 1.</p>

    <p class="flow-text center red-text"><pre>1111</pre></p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p class="flow-text center red-text"><pre> 1000</pre></p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text">For the final step, we must add 1 + 0 + 1. 1 + 0 = 1 and 1 + 1 = 10. We will directly write 10 because it is the last column.</p>

    <p class="flow-text center red-text"><pre>1111</pre></p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">0 1 0 1 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">1 1 1 0 1</p>
    <p :class="[darkMode ? whiteText : '']" class="flow-text center">+ _________________</p>
    <p class="flow-text center red-text"> 101000</p>

    <p :class="[darkMode ? whiteText : '']" class="flow-text center">The final answer is <strong><span class="red-text answer-font">101000</span></strong>.</p>

    <h4 :class="[darkMode ? whiteText : '']" class="center">Be sure to checkout out our <a @click="navigateToBinaryAddition">binary addition tool!</a></h4>
    
  </div>
</template>

<script>
import Meta from 'vue-meta'

export default {
  metaInfo() {
    return {
      title: 'Learn Binary Addition',
      titleTemplate: '%s ← Cs Conversions',
    meta: [
      {
        name: "description",
        content: "Easily learn binary addition!"
      }
    ]
    }
  },
  data() {
    return {
      darkTextBackground: 'dark-text-background',
      whiteBackground: 'white-background',
      whiteText: 'white-text',
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },
  methods: {
    navigateToBinaryAddition() {
      this.$router.push('/binary-addition-conversion')
    }
  }
}
</script>


<style scoped>
</style>
