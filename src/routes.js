import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Home from './components/Home.vue'
import BinaryAddition from './components/conversions/BinaryAddition.vue'
import BinaryHexDecimal from './components/conversions/BinaryHexDecimal.vue'
import IEEE754 from './components/conversions/IEEE754.vue'
import OnesAndTwosComp from './components/conversions/OnesAndTwosComp.vue'
import HexadecimalConversions from './components/conversions/HexadecimalConversions.vue'

export const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/contact', component: Contact},
  {path: '/binary-addition', component: BinaryAddition},
  {path: '/binary-hex-decimal', component: BinaryHexDecimal},
  {path: '/ieee-754', component: IEEE754},
  {path: '/ones-and-twos-complement', component: OnesAndTwosComp},
  {path: '/hexadecimal-conversions', component: HexadecimalConversions},
  {path: '*', redirect: '/'}
]
