<template>
  <div class="container">
    <appHomePageListItem
      v-for="item in PageItems"
      :listItem="item"
      :key="item.id"
    ></appHomePageListItem>
  </div>
</template>

<script>
import HomePageListItem from './HomePageListItem.vue'
export default {
  data() {
    return {
      // list of items we will iterate over and pass down as props to HomePageListItem
      PageItems: [
        {
          id: 1,
          conversionType: 'Binary To Decimal',
          conversionButtonRoute: '/binary-decimal-conversion',
          explanationButtonRoute: '/binary-to-decimal-explanation',
          practiceButtonRoute: '/binary-practice-problems'
        },
        {
          id: 2,
          conversionType: 'Decimal To Binary',
          conversionButtonRoute: '/binary-decimal-conversion',
          explanationButtonRoute: 'decimal-to-binary-explanation',
          practiceButtonRoute: '/binary-practice-problems'
        },
        {
          id: 3,
          conversionType: 'Decimal To Hex',
          conversionButtonRoute: 'hexadecimal-decimal-conversion',
          explanationButtonRoute: 'decimal-to-hex-explanation',
          practiceButtonRoute: 'hexadecimal-practice-problems'
        },
        {
          id: 4,
          conversionType: 'Hex To Decimal',
          conversionButtonRoute: 'hexadecimal-decimal-conversion',
          explanationButtonRoute: 'hexadecimal-to-decimal-explanation',
          practiceButtonRoute: 'hexadecimal-practice-problems'
        },
        {
          id: 5,
          conversionType: 'Binary Addition',
          conversionButtonRoute: '/binary-addition-conversion',
          explanationButtonRoute: 'binary-addition-explanation',
          practiceButtonRoute: 'binary-addition-practice-problems'
        },
        {
          id: 6,
          conversionType: 'Floating Point to IEEE 754 Format',
          conversionButtonRoute: '/ieee-754-conversion',
          explanationButtonRoute: '/ieee754-explanation',
          practiceButtonRoute: '/ieee-754-practice-problems'
        },
        {
          id: 7,
          conversionType: 'Ones Complement',
          conversionButtonRoute: '/ones-and-twos-complement-conversion',
          explanationButtonRoute: '/ones-complement-explanation',
          practiceButtonRoute: '/ones-and-twos-complement-practice-problems'
        },
        {
          id: 8,
          conversionType: 'Twos Complement',
          conversionButtonRoute: '/ones-and-twos-complement-conversion',
          explanationButtonRoute: 'twos-complement-explanation',
          practiceButtonRoute: '/ones-and-twos-complement-practice-problems'
        }
      ]
    }
  },
  components: {
    appHomePageListItem: HomePageListItem
  }
}
</script>
